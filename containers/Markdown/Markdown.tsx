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
import Head from 'next/head';

export type PropsContainerMarkdown = {
  content: string,
  tree: DocTreeNode,
  node: DocTreeNode,
  router: NextRouter;
};

class ContainerMarkdown extends
  React.PureComponent<PropsContainerMarkdown> {

  render = () => {
    const {router} = this.props;
    return (
      <>
        <Head>
          <title>{this.props.node.meta.title}</title>
          <meta name="description" content={this.props.node.meta.description} />
          <meta name="keywords" content={this.props.node.meta.keywords} />
        </Head>
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
                a({node, href, children, ...props}) {
                  let injected_href = href;
                  if (href?.startsWith("./")) {
                    injected_href = router.asPath + href.replace("./", "/").replace(".md", "");
                  }
                  return (
                    <a {...props} href={injected_href}>
                      {children}
                    </a>
                  );
                },
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  if (match && match[1] === "sh") {
                    const lines = String(children).trim().split("\n");
                    const html = lines.map((line, i) => {
                      const [cmd, ...lines] = line.split(" ");
                      return (
                        <code key={i}>
                          <strong style={{
                            lineHeight: "1.2em",
                          }}>
                            {cmd}&nbsp;
                          </strong>
                          {lines.join(" ")}
                          <br />
                        </code>
                      )
                    });
                    return (
                      <SyntaxHighlighter
                      customStyle={{
                        backgroundColor: '#f5f8fa',
                      }}
                      renderer={() => <code>{html}</code>}
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="pre"
                      style={prims.vs}
                    />
                      // <code className={className} {...props}>
                      //   <pre>
                      //     {html}
                      //   </pre>
                      // </code>
                    )
                  }
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
