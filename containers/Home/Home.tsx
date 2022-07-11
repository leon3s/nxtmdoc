import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { NextRouter, withRouter } from 'next/router';

import * as Style from './style';
// import TextField from '@mui/material/TextField';

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

  onClick = () => {
  };

  render() {
    const {
    } = this.props;
    return (
      <Style.Container>
        <Style.HeroContainer>
          <h2>What can we help you find?</h2>
          {/* <TextField
            id="search"
            variant="outlined"
            style={{
              maxWidth: 500,
              width: '100%',
              backgroundColor: 'white',
            }}
            placeholder="Search for guides, terms, commands, and more..."
          /> */}
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
