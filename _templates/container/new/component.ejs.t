---
to: containers/<%= name %>/<%= name %>.tsx
---
import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import type { Dispatch } from '~/utils/redux';
import type { NextRouter } from 'next/router';
import type { State } from '~/redux/reducers';

import * as Style from './style';

const actions = {
};

const mapStateToProps = ({}: State) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<State>) =>
  bindActionCreators(actions, dispatch);

export type PropsContainer<%= name %> = {
  router: NextRouter;
}
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

class Container<%= name %> extends PureComponent<PropsContainer<%= name %>> {
  render = () => {
    return (
      <Style.Container<%= name %>>
        <%= name %>
      </Style.Container<%= name %>>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container<%= name %>));
