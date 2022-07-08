import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import type { Dispatch } from '~/utils/redux';
import type { NextRouter } from 'next/router';
import type { State } from '~/redux/reducers';

import * as Style from './style';
import Title from '~/components/Title';
import P from '~/components/P';

import {counterSet} from '~/redux/actions/home';
import Button from '~/components/Button';

const actions = {
  counterSet,
};

const mapStateToProps = (state: State) => ({
  counter: state.home.counter,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) =>
  bindActionCreators(actions, dispatch);

export type HomeContainerProps = {
  router: NextRouter;
}
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

class HomeContainer extends
  React.PureComponent<HomeContainerProps> {

  onClick = () => {
    this.props.counterSet(this.props.counter + 1);
  };

  render() {
    const {
      counter
    } = this.props;
    return (
      <Style.Container>
        <Style.Center>
          <Title>
            NEXT JS STARTER
          </Title>
          <P>
            Counter value [{counter}]
          </P>
          <Button
            onClick={this.onClick}
          >
            Click on me
          </Button>
        </Style.Center>
      </Style.Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeContainer));
