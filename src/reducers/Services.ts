import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: ReducerState<AllServices> = {
  wasLoaded: false,
  isLoading: false,
  error: false,
  data: {},
};

export const reducer = handleActions<ReducerState<AllServices>>({
  [Actions.GET_SERVICES]: (state, action) => {
    return {
      ...state,
      isLoading: true,
      error: false,
    };
  },
  [Actions.GET_SERVICES_SUCCESS]: (state, action) => {
    return {
      ...state,
      wasLoaded: true,
      isLoading: false,
      error: false,
      data: {
        ...action.payload,
      },
    };
  },
}, initialState);
