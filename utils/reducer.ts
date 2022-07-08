export type ReducerHooks<S> = Record<
  string,
  (state: S, action: any) => S
>;

export const createReducer = <S>(initialState: S, reducerHooks: ReducerHooks<S>) => {
  const reducer = (state: S = initialState, action: any): S => {
    const fn = reducerHooks[action.type] || null;
    if (!fn) {
      return state;
    };
    return fn(state, action);
  };
  return reducer;
};
