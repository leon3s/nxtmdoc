import React from 'react';
import Separator from '../Separator';
import type {DocTreeNode} from 'types/doc_tree.h';
import { useRouter } from 'next/router'

import * as Style from './style';
import Link from 'next/link';

export type PropsHeader = {
  header_links: any[],
};

const Header = (props: PropsHeader) => {
  const router = useRouter();
  return (
    <Style.ShadowContainer>
      <Style.ContainerHeader>
        <Style.ContentHeader>
          <Style.ContentHeaderLeft>
            <Style.HeaderTitle>
               <a
                href="/"
              >
                NXTMDOC
              </a>
            </Style.HeaderTitle>
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
        </Style.ContentHeader>
        <Separator />
      </Style.ContainerHeader>
    </Style.ShadowContainer>
  )
};

export default Header;
