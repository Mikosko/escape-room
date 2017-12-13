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
    if (action.payload && action.payload.fetch) {
      const { onSuccessType, onErrorType, options, url, params } = action.payload.fetch;
      const par = params ? params : '';
      fetch(`${(globalConfig && globalConfig.rootUrl || options && options.rootUrl) + url + par}`, {
        ...globalConfig,
        ...options,
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
