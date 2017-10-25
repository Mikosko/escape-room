import { Fetch } from '../src/middleware/fetcher';

declare global {
  export interface FetcherAction {
    type: any;
    fetch?: Fetch;
  }
}
