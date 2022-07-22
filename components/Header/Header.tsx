import React, { useState } from 'react';
import Separator from '../Separator';
import { useRouter } from 'next/router';

import * as Style from './style';
import MenuTree from '../MenuTree';
import type { DocTreeNode } from 'types/doc_tree.h';
import Image from 'next/image';

export type PropsHeader = {
  content: string,
  node: DocTreeNode,
  statusCode: number,
  tree: DocTreeNode,
  header_links: any[],
};

const Header = (props: PropsHeader) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Style.ShadowContainer>
        <Style.ContainerHeader>
          <Style.ContentHeader>
            <Style.ContentHeaderLeft>
              <Style.HeaderTitleLink
                href="/"
              >
                <Image src="https://download.next-hat.com/ressources/images/logo.png" alt="logo" width={42} height={42} />
                <Style.HeaderTitle>
                    Next Hat Docs
                </Style.HeaderTitle>
              </Style.HeaderTitleLink>
            </Style.ContentHeaderLeft>
            <Style.ContentHeaderCenter>
              <Style.HeaderNav>
                {props.header_links?.map((header_link) => (
                  <Style.HeaderLink
                    key={header_link.url}
                    selected={router.asPath.startsWith(header_link.url)}
                    href={header_link.url}
                  >
                    {header_link.title}
                  </Style.HeaderLink>
                )) || null}
              </Style.HeaderNav>
            </Style.ContentHeaderCenter>
            {/* <Style.ContentHeaderRight>
            TODO Light/Dark mode
          </Style.ContentHeaderRight> */}
            <Style.MobileHeaderMenu>
              <Style.MenuButton
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Style.MenuButtonIcon
                  className="fas fa-bars"
                  isOpen={isMenuOpen}
                />
              </Style.MenuButton>
              <Style.MobileHeaderMenuFixed isOpen={isMenuOpen}>
                <MenuTree tree={props.tree} node={props.node} />
              </Style.MobileHeaderMenuFixed>
            </Style.MobileHeaderMenu>
          </Style.ContentHeader>
          <Separator />
        </Style.ContainerHeader>
      </Style.ShadowContainer>
    </>
  );
};

export default Header;
