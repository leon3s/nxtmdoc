export type DocTreeNode = {
  name: string,
  url: string,
  path: string,
  dir_name: string,
  type: 'file' | 'directory',
  children: DocTreeNode[],
};
