---
to: components/<%= name %>/<%= name %>.tsx
---
import React from 'react';

import * as Style from './style';

export type Props<%= name %> = {
};

const <%= name %> = ({}: Props<%= name %>) => (
  <Style.Container<%= name %>>
    <%= name %>
  </Style.Container<%= name %>>
);

export default <%= name %>;
