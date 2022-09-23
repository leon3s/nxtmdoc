import React from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import Router, { NextRouter, useRouter } from 'next/router';

import * as Style from './style';
import type { MenuNode } from '~/utils/menuTree';

export type PropsMenuTree = {
  tree?: MenuNode,
};

const renderTree = (router: NextRouter, tree?: MenuNode) => {
  if (!tree?.children) return null;
  return tree.children.map((node, i) => {
    return (
      <TreeItem
        key={node.title + i}
        label={node.title}
        nodeId={node.url || node.title + i}
        style={{
          borderLeft: router.asPath === node.url ? '4px solid orange' : '4px solid transparent',
        }}
        onClick={() => !node?.children?.length && Router.push(node.url)}
    >
      {node?.children?.length ?
        renderTree(router, node)
        : null}
    </TreeItem>
  )});
};

const MenuTree = (props: PropsMenuTree) => {
  const router = useRouter();
  const [_, ...routes] = router.asPath.split("/");
  const expanded: string[] = [];
  while (routes.length) {
    expanded.push(`/${routes.join("/")}`);
    routes.pop();
  }
  console.log(expanded);
  console.log(router);
  return (
    <Style.ShadowContainer>
      <Style.ContainerMenuTree>
        <TreeView
          aria-label="file system navigator"
          defaultSelected={router.asPath}
          defaultExpanded={expanded}
          defaultExpandIcon={<i style={{
            color: 'orange',
          }} className="fas fa-chevron-right"></i>}
          defaultCollapseIcon={<i style={{
            color: 'orange',
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
