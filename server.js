const path = require('path');
const next = require('next');
const express = require('express');
const { readFileSync, statSync, readdirSync } = require('fs');

const port = +(process.env.PORT || 3001);
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const doc_path = process.argv[2] || path.resolve(path.join(__dirname, "./test_doc/doc"));

const config = require(path.join(doc_path, "config.js"));

function new_doc_node(p) {
  const name = path.basename(p);
  const dir_name = path.dirname(p).replace(doc_path, '');
  let url = p.replace(doc_path, '');
  if (p === doc_path) {
    url = '/';
  }
  return {
    name,
    url,
    dir_name,
  }
}

function get_doc_file(fp) {
  const file_path = path.resolve(path.join(doc_path, fp));

  if (!file_path.startsWith(doc_path)) {
    return null;
  }

  try {
    const node = new_doc_node(file_path);
    const content = readFileSync(file_path, 'utf8');
    return {
      node,
      content,
    }
  } catch (e) {
    return null
  }
}

app.prepare().then(() => {
  const server = express();

  server.get("/search", (req, res) => {
    return app.render(req, res, "/s");
  });

  server.get("/", (req, res) => {
    return app.render(req, res, "/", {
      header_links: config.header_links,
      home_page_blocks: config.home_page_blocks,
    })
  });

  server.get("/api/config", (req, res) => {
    res.json({
      header_links: config.header_links,
      home_page_blocks: config.home_page_blocks,
    });
  });

  Object.keys(config.routes).forEach((route_path) => {
    const route_config = config.routes[route_path];
    server.get("/api" + route_path, (req, res) => {
      const doc_file = get_doc_file(route_config.match);
      if (!doc_file) {
        return res.status(404).json({
          message: "not found",
        });
      }
      res.json({
        node: doc_file.node,
        content: doc_file.content,
        menu_tree: route_config.tree,
        header_links: config.header_links,
      });
    });

    server.get(route_path, (req, res) => {
      return app.render(req, res, "/markdown", {
        route_path,
      });
    });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
