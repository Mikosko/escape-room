import 'redux';

declare module 'redux' {
  export interface ActionPayload<P> extends Action {
    payload: P;
  }
}
