import path from 'path';
import {stat, readdir} from 'fs/promises';

export async function genDocUrl(curr_path: string, urls: string[] = []): Promise<string[]> {
  const info = await stat(curr_path);
  const is_dir = info.isDirectory();
  if (!is_dir) {
    urls.push(curr_path.replace('.md', ''));
    return urls;
  }
  const files = await readdir(curr_path);
  for (const file of files) {
    const file_path = path.join(curr_path, file);
    const name = path.basename(file_path);
    const start = name.charAt(0);
    if (name === "README.md") continue;
    if (start === '.' || start === '_') continue;
    urls = [
      ...urls,
      ...await genDocUrl(file_path),
    ]
  }
  return urls;
}
