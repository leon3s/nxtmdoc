import type {ReducerAction} from '~/utils/redux';
import type {ReducerHooks} from '~/utils/reducer';
import { createReducer } from '~/utils/reducer';

import {
  COUNTER_SET,
  counterSet,
} from '../actions/home';

export type HomeState = {
  counter: number;
};

const initialState: HomeState = {
  counter: 0,
};

const reducerHooks: ReducerHooks<HomeState> = {
  [COUNTER_SET.DEFAULT]:
    (state, action: ReducerAction<typeof counterSet>) => ({
      ...state,
      counter: action.payload,
    }),
};

const reducer = createReducer<HomeState>(initialState, reducerHooks);

export default reducer;
