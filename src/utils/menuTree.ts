import path from 'path';
import {stat, readdir} from 'fs/promises';

export type MenuNode = {
  title: string,
  url: string,
  children: MenuNode[],
}

function genNode(currPath: string, isDir: boolean): MenuNode {
  const title = path.basename(currPath).replace(".md", '').replace(/-/g, ' ');
  return {
    title,
    children: [],
    url: currPath.replace(process.cwd(), '').split(path.sep).join(path.posix.sep).replace('.md', ''),
  }
}

export async function genMenuTree(currPath: string): Promise<MenuNode> {
  const info = await stat(currPath);
  const isDir = info.isDirectory();
  const menuNode = genNode(currPath, isDir);
  if (isDir) {
    const files = await readdir(currPath);
    for (const file of files) {
      const filePath = path.join(currPath, file);
      const name = path.basename(filePath);
      const start = name.charAt(0);
      if (name === "README.md") continue;
      if (start === '.' || start === '_') continue;
      menuNode.children.push(await genMenuTree(filePath));
    }
  }
  return menuNode;
}
