import 'redux-actions';

declare module 'redux-actions' {
  export function handleActions<State>(
    reducerMap: ReducerMap<State, any>,
    initialState: State,
  ): Reducer<State, any>;
}
