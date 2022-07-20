import React from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import { NextRouter, useRouter } from 'next/router';

import * as Style from './style';
import type { DocTreeNode } from 'types/doc_tree.h';

export type PropsMenuTree = {
  tree: DocTreeNode,
  node: DocTreeNode,
};

const renderTree = (tree: DocTreeNode, router: NextRouter) => {
  if (!tree?.children) return null;
  return tree.children.map((node, i) => (
    <TreeItem
      key={node.name + i}
      label={node.name}
      nodeId={node.url || node.name + i}
      style={{
        borderLeft: router.asPath === node.url ? '4px solid orange' : '4px solid transparent',
      }}
      onClick={() => node.url && node.url !== router.asPath ? router.push(node.url) : undefined}
    >
      {node?.children?.length ?
        renderTree(node, router)
        : null}
    </TreeItem>
  ));
};

const MenuTree = (props: PropsMenuTree) => {
  const router = useRouter();
  const [_, ...routes] = router.asPath.split("/");
  console.log({routes});
  const expanded: string[] = [];
  while (routes.length) {
    expanded.push(`/${routes.join("/")}`);
    routes.pop();
  }
  return (
    <Style.ShadowContainer>
      <Style.ContainerMenuTree>
        <TreeView
          aria-label="file system navigator"
          selected={router.asPath}
          expanded={expanded}
          defaultExpandIcon={<i style={{
            color: 'orange',
          }} className="fas fa-chevron-right"></i>}
          defaultCollapseIcon={<i style={{
            color: 'orange',
          }} className="fas fa-chevron-down"></i>}
          // defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: '100%', flexGrow: 1, maxWidth: 242, overflowY: 'auto', marginRight: 0 }}
        >
          {renderTree(props.tree, router)}
        </TreeView>
      </Style.ContainerMenuTree>
    </Style.ShadowContainer>
  );
};

export default MenuTree;
