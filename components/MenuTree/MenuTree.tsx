import React from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import { NextRouter, useRouter } from 'next/router';

import * as Style from './style';
import type { DocTreeNode } from 'types/doc_tree.h';

export type PropsMenuTree = {
  tree?: DocTreeNode,
  node?: DocTreeNode,
};

const renderTree = (router: NextRouter, tree?: DocTreeNode) => {
  if (!tree?.children) return null;
  return tree.children.map((node, i) => (
    <TreeItem
      key={node.name + i}
      label={node.name}
      nodeId={node.url || node.name + i}
      style={{
        borderLeft: router.asPath === node.url ? '4px solid orange' : '4px solid transparent',
      }}
      onClick={() => (!node.is_dir) && node.url && node.url !== router.asPath ? window.location.href = node.url : undefined}
    >
      {node?.children?.length ?
        renderTree(router, node)
        : null}
    </TreeItem>
  ));
};

const MenuTree = (props: PropsMenuTree) => {
  const router = useRouter();
  const [_, ...routes] = router.asPath.split("/");
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
          defaultSelected={router.asPath}
          defaultExpanded={expanded}
          defaultExpandIcon={<i style={{
            color: '#ff9800',
          }} className="fas fa-chevron-right"></i>}
          defaultCollapseIcon={<i style={{
            color: '#ff9800',
          }} className="fas fa-chevron-down"></i>}
          // defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: '100%', flexGrow: 1, maxWidth: 242, overflowY: 'auto', marginRight: 0 }}
        >
          {renderTree(router, props.tree)}
        </TreeView>
      </Style.ContainerMenuTree>
    </Style.ShadowContainer>
  );
};

export default MenuTree;
