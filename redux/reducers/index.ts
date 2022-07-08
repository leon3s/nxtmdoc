import {combineReducers} from 'redux';
import home from './home';

const reducers = combineReducers({
  home: home,
});

export type Store = typeof reducers;
export type State = ReturnType<typeof reducers>;

export default reducers;
