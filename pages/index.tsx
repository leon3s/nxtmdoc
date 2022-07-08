import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { wrapper } from '~/redux/store';
import HomeContainer from '../containers/Home';

import type {State} from '~/redux/reducers';
import type {Dispatch} from '~/utils/redux';
import type {GetServerSidePropsResult} from 'next';

const actions = {
};

const mapStateToprops = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch<State>) =>
  bindActionCreators(actions, dispatch);

type IndexPageProps = {
} & ReturnType<typeof mapStateToprops>
& ReturnType<typeof mapDispatchToProps>

export const getServerSideProps = wrapper.getServerSideProps(({}) =>
  async ({}): Promise<GetServerSidePropsResult<any>> => {
    return {
      props: {},
    };
  }
);

function IndexPage({}: IndexPageProps) {
  return (
    <HomeContainer />
  );
}

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(IndexPage);
