import React from 'react';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import * as prims from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { NextRouter, withRouter } from 'next/router';
import type { DocTreeNode } from 'types/doc_tree.h';

import * as Style from './style';
import MenuTree from '~/components/MenuTree';

export type PropsContainerMarkdown = {
  content: string,
  tree: DocTreeNode,
  node: DocTreeNode,
  router: NextRouter;
};

class ContainerMarkdown extends
  React.PureComponent<PropsContainerMarkdown> {

  render = () => {
    return (
      <>
        <Style.MainContainer>
          <Style.MenuContainer>
            <MenuTree node={this.props.node} tree={this.props.tree} />
          </Style.MenuContainer>
          <Style.ContainerMarkdown>
            <ReactMarkdown
              skipHtml={false}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      customStyle={{
                        backgroundColor: '#f5f8fa',
                      }}
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="pre"
                      style={prims.vs}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {this.props.content}
            </ReactMarkdown>
          </Style.ContainerMarkdown>
        </Style.MainContainer>
      </>
    );
  }
}

export default withRouter(ContainerMarkdown);
