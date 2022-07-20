import React from 'react';
import {Grid, Box} from '@mui/material';

import { NextRouter, withRouter } from 'next/router';

import * as Style from './style';
import SearchBar from '~/components/SearchBar';

export type HomeContainerProps = {
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
          <h2>What can we help you find?</h2>
          <SearchBar />
        </Style.HeroContainer>
        <Style.Center>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {this.props.home_page_blocks.map((block, i) => (
              <Grid item xs={4} key={i}>
                  <Style.GridLink href={block.url} key={block.url}>
                    <Style.GridIcon src={block.icon} />
                    <Style.GridTitle>
                      {block.title}
                    </Style.GridTitle>
                    <Style.GridDesription>
                      {block.description}
                    </Style.GridDesription>
                  </Style.GridLink>
              </Grid>
              ))}
            </Grid>
          </Box>
        </Style.Center>
      </Style.Container>
    );
  }
}

export default withRouter(HomeContainer);
