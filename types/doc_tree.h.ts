export type DocTreeNode = {
  name: string,
  url: string,
  path: string,
  dir_name: string,
  is_dir: boolean,
  children: DocTreeNode[],
  titles: {
    name: string,
    id: string,
  }[],
  meta: {
    title: string,
    description: string,
    keywords: string,
  }
};
