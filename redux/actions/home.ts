import {genAction} from '~/utils/redux';
import type {State} from '../reducers';

export const [COUNTER_SET, counterSet] = genAction<[
  number
], State, number>(
  'COUNTER_SET',
  (value) => value
);

