const path = require('path');
const next = require('next');
const express = require('express');
const next_conf = require('./next.config');
const { readFileSync, statSync, readdirSync } = require('fs');

const port = +(process.env.PORT || 3001);
const dev = process.env.NODE_ENV === 'development';

const app = next({ dev, dir: __dirname, conf: next_conf });
const handle = app.getRequestHandler();

const doc_path = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve("./test_doc/doc");

function new_doc_node(p, is_dir) {
  const name = path.basename(p).replace(".md", '').replace(/-/g, ' ');
  const dir_name = path.dirname(p).replace(doc_path, '');
  let url = p.replace(doc_path, '');
  url = url.replace('.md', '');
  if (p === doc_path) {
    url = '/';
  }
  return {
    name,
    url,
    is_dir,
    dir_name,
    children: [],
  }
}

function get_doc_content(fp) {
  const file_path = fp;

  if (!file_path.startsWith(doc_path)) {
    return null;
  }

  try {
    return readFileSync(file_path, 'utf8');
  } catch (e) {
    return null
  }
}

function generate_dir_tree(curr_path) {
  const stat = statSync(curr_path);
  const is_dir = stat.isDirectory();
  const node = new_doc_node(curr_path, is_dir);
  if (is_dir) {
    const files = readdirSync(curr_path);
    for (const file of files) {
      const file_path = path.join(curr_path, file);
      const name = path.basename(file_path);
      const start = name.charAt(0);
      if (name === "README.md") continue;
      if (start === '.' || start === '_') continue;
      node.children.push(generate_dir_tree(file_path));
    }
  }
  return node;
}

function stat_path(file_path) {
  try {
    const stats = statSync(file_path);
    if (stats.isDirectory()) {
      return stat_path(path.join(file_path, "README.md"));
    }
    return file_path;
  } catch (e) {
    if (path.extname(file_path) === ".md") {
      throw e;
    }
    return stat_path(file_path + ".md");
  }
}


app.prepare().then(() => {
  const server = express();

  server.get("/search", (req, res) => {
    return app.render(req, res, "/s");
  });

  server.get("/", (req, res) => {
    return app.render(req, res, "/", {
      header_links: [],
      home_page_blocks: [],
    })
  });

  server.get("/api/config", (req, res) => {
    res.json({
      header_links: [],
      home_page_blocks: [],
    });
  });


  server.use((req, res, next) => {

    if (req.method !== "GET") return next();

    const dir_path = path.join(doc_path, req.path.split("/")[0]);
    let node_path = path.join(doc_path, req.path);

    if (!node_path.startsWith(doc_path)) return next();
    if (!dir_path.startsWith(doc_path)) return next();

    try {
      node_path = stat_path(node_path);
      const doc_node = new_doc_node(node_path, false);
      const tree = generate_dir_tree(dir_path);
      const doc_content = get_doc_content(node_path);
      const props = {
        tree: tree,
        node: doc_node,
        content: doc_content,
      };
      app.render(req, res, "/markdown", props);
    } catch (_e) {
      next();
    }
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error(err);
});
