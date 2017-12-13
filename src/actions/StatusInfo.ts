import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export type GetStatusInfoAction = () => void;
export const getStatusInfo = createAction(Actions.GET_STATUSINFO, () => {
  return {
    fetch: {
      url: 'statusinfo',
      onSuccessType: Actions.GET_STATUSINFO_SUCCESS,
      onErrorType: Actions.GET_STATUSINFO_ERROR,
    },
  };
});
