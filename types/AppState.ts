import { RouterState } from 'react-router-redux';

declare global {
  export interface AppState {
    router: RouterState;
    user: ReducerState<User>;
  }
}
