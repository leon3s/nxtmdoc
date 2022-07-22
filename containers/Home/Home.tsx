import React from 'react';
import {Box} from '@mui/material';

import { NextRouter, withRouter } from 'next/router';

import * as Style from './style';
import SearchBar from '~/components/SearchBar';

export type HomeContainerProps = {
  body: string,
  home_page_blocks: {
    title: string,
    description: string,
    icon: string,
    url: string,
  }[]
  router: NextRouter;
};

class HomeContainer extends
  React.PureComponent<HomeContainerProps> {

  render() {
    return (
      <Style.Container>
        <Style.HeroContainer>
          <Style.Title>What can we help you find?</Style.Title>
          <SearchBar />
        </Style.HeroContainer>
        <Style.Center>
          <Box sx={{ flexGrow: 1 }}>
            <div dangerouslySetInnerHTML={{__html: this.props.body }} />
          </Box>
        </Style.Center>
      </Style.Container>
    );
  }
}

export default withRouter(HomeContainer);
