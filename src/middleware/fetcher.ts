export interface GlobalConfig extends RequestInit {
  rootUrl?: string;
}

export interface Fetch {
  params?: any;
  query?: any;
  url: string;
  onSuccessType: any;
  onErrorType: any;
  options?: GlobalConfig;
}

export default function fetcher(globalConfig?: GlobalConfig) {
  return ({ dispatch, getState }) => (next) => (action: FetcherAction) => {
    if (action.fetch) {
      const { onSuccessType, onErrorType } = action.fetch;
      fetch(`${(globalConfig && globalConfig.rootUrl || action.fetch.options && action.fetch.options.rootUrl) + action.fetch.url + action.fetch.params}`, {
        ...globalConfig,
        ...action.fetch.options,
      }).then((response) => {
        if (response.ok) {
          return response.json().then((responseJSON) => {
            return dispatch({ type: onSuccessType, error: false, payload: responseJSON });
          });
        }
        throw new Error(response.status + ' ' + response.statusText);
      }).catch((error) => {
        return dispatch({ type: onErrorType, error: true, payload: error });
      });
      return dispatch({ type: action.type });
    }
    return next(action);
  };
}
