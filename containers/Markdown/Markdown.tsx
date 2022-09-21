import React from 'react';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import {vs} from 'react-syntax-highlighter/dist/cjs/styles/prism';

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

  state = {
    currentTitle: null,
  }

  onScroll: any;

  componentDidMount() {

    // if (document.location.hash) {
    //   const elem = document.getElementById(document.location.hash);
    //   elem?.scrollTo();
    // }
    /// TODO check on scroll what is the closed h2 element
    // this.onScroll = document.addEventListener('scroll', (ev) => {
    //   var elements = document.getElementsByClassName('div-linked');
    //   for (var i = 0; i < elements.length; i++) {
    //     const element = elements[i];
    //     var position = element.getBoundingClientRect();
    //     if (( element.offsetWidth || element.offsetHeight || element.getClientRects().length )) {
    //       console.log('Element is fully visible in screen');
    //       const id = element.id;
    //       if (id && id !== this.state.currentTitle) {
    //         this.setState({
    //           currentTitle: id,
    //         });
    //       }
    //     }
      
    //     // checking for partial visibility
    //     if(position.top < window.innerHeight && position.bottom >= 0) {
    //       console.log('Element is partially visible in screen');
    //     }
    //   }
    // });
  }

  componentWillUnmount() {
    // document.removeEventListener('scroll', this.onScroll);
  }

  render = () => {
    const {router} = this.props;
    return (
      <>
        <Head>
          <title>{this.props.node.meta.title}</title>
          <meta name="description" content={this.props.node.meta.description} />
          <meta name="keywords" content={this.props.node.meta.keywords} />
          <meta property="og:url" content={`https://docs.next-hat.com` + router.asPath} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={this.props.node.meta.title} />
          <meta property="og:description" content={this.props.node.meta.description} />
          <meta property="og:image" content="https://download.next-hat.com/ressources/images/logo.png" />
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
                      customStyle={{
                        backgroundColor: '#f5f8fa',
                      }}
                      renderer={() => <code>{html}</code>}
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="pre"
                      style={vs}
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
                      style={vs}
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
                  href={`https://github.com/nxthat/documentation/edit/master${this.props.node.url}.md`}
                  target="_blank"
                >
                  <Style.Icon className="fas fa-pen-to-square"></Style.Icon>
                  Edit this page
                </Style.MenuRightLink>
                <Style.MenuRightLink
                  href={`https://github.com/nxthat/documentation/issues/new?body=File:%20[${this.props.node.url}.md](https://docs.next-hat.com${router.asPath})`}
                  target="_blank"
                >
                  <Style.Icon className="fas fa-check"></Style.Icon>
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
      </>
    );
  }
}

export default withRouter(ContainerMarkdown);
