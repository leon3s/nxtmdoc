import React from 'react';
import Separator from '../Separator';
import { useRouter } from 'next/router';

import * as Style from './style';

export type PropsHeader = {
  header_links: any[],
};

const Header = (props: PropsHeader) => {
  const router = useRouter();
  return (
    <>
      <Style.ShadowContainer>
        <Style.ContainerHeader>
          <Style.ContentHeader>
            <Style.ContentHeaderLeft>
              <Style.HeaderTitleLink
                href="/"
              >
                <img src="https://download.next-hat.com/ressources/images/logo.png" alt="logo" width={42} height={42} />
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
          </Style.ContentHeader>
          <Separator />
        </Style.ContainerHeader>
      </Style.ShadowContainer>
    </>
  );
};

export default Header;
