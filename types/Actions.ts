import { Fetch } from '../src/middleware/fetcher';

declare global {
  export interface FetcherAction {
    type: any;
    payload?: {
      fetch: Fetch,
    };
  }
}
