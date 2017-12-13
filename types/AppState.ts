import { RouterState } from 'react-router-redux';

declare global {
  export interface AppState {
    router: RouterState;
    statusInfo: ReducerState<StatusInfo>;
    services: ReducerState<AllServices>;
  }
}
