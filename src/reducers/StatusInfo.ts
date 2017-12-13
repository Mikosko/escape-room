import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: ReducerState<StatusInfo> = {
  wasLoaded: false,
  isLoading: false,
  error: false,
  data: {},
};

export const reducer = handleActions<ReducerState<StatusInfo>>({
  [Actions.GET_STATUSINFO]: (state, action) => {
    return {
      ...state,
      isLoading: true,
      error: false,
    };
  },
  [Actions.GET_STATUSINFO_SUCCESS]: (state, action) => {
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
