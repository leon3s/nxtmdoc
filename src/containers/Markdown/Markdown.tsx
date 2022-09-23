import React from 'react';
import {NextRouter, withRouter} from 'next/router';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import MenuTree from '~/components/MenuTree';

import type { MenuNode } from '~/utils/menuTree';
import type { DocTreeNode } from '~/types/doc_tree.h';

import * as Style from './style';

export type PropsContainerMarkdown = {
  content: string,
  menuTree: MenuNode,
  node: DocTreeNode,
  router: NextRouter;
};

class ContainerMarkdown extends
  React.PureComponent<PropsContainerMarkdown> {

  render = () => {
    const {router} = this.props;
    return (
        <Style.MainContainer>
          <Style.MenuContainer>
            <MenuTree node={this.props.node} tree={this.props.menuTree} />
          </Style.MenuContainer>
          <Style.ContainerMarkdown>
            <ReactMarkdown
              skipHtml={false}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                h2({node, children, ...props}) {
                  const id = String(children).replace(/[^\w\s]/gi, '').trim().replace(/ +/g, '-').toLocaleLowerCase();
                  return (
                    <>
                      <Style.DivLinked
                        id={id}
                        className="div-linked"
                      />
                      <h2 {...props}>{children}</h2>
                    </>
                  )
                },
                a({node, href, children, ...props}) {
                  let injected_href = href?.replace(".md", "");
                  if (href?.startsWith("./")) {
                    injected_href = router.asPath + injected_href?.replace("./", "/");
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
                        renderer={() => <code>{html}</code>}
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        PreTag="pre"
                        style={atomDark}
                      />
                    )
                  }
                  return !inline && match ? (
                    <SyntaxHighlighter
                      customStyle={{
                      }}
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="pre"
                      style={atomDark}
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
          <Style.MenuRight>
            <Style.MenuContainer>
              <Style.MenuRightFixed>
                <Style.MenuRightLink
                  href={`https://github.com/nxthat/documentation/edit/master${this.props.node?.url}.md`}
                  target="_blank"
                >
                  <Style.Icon color='#ff9800' className="fas fa-pen-to-square"></Style.Icon>
                  Edit this page
                </Style.MenuRightLink>
                <Style.MenuRightLink
                  href={`https://github.com/nxthat/documentation/issues/new?body=File:%20[${this.props.node?.url}.md](https://docs.next-hat.com${router.asPath})`}
                  target="_blank"
                >
                  <Style.Icon color='#ff9800' className="fas fa-check"></Style.Icon>
                  Request doc change
                </Style.MenuRightLink>
                {this.props?.node?.titles?.length ?
                  <Style.MenuRightLine>
                    <Style.MenuRightPageTitle>
                      On this page:
                    </Style.MenuRightPageTitle>
                  </Style.MenuRightLine>
                : null}
                {this.props?.node?.titles?.map((title) => (
                  <Style.MenuRightLink
                    key={title.id}
                    href={`${router.asPath}#${title.id}`}
                    selected={title.id === this.state.currentTitle}
                  >
                    {title.name}
                  </Style.MenuRightLink>
                ))}
              </Style.MenuRightFixed>
            </Style.MenuContainer>
          </Style.MenuRight>
        </Style.MainContainer>
    );
  }
}

export default withRouter(ContainerMarkdown);
