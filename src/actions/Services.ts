import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export type GetServicesAction = () => void;
export const getServices = createAction(Actions.GET_SERVICES, () => {
  return {
    fetch: {
      url: 'getAllServices',
      onSuccessType: Actions.GET_SERVICES_SUCCESS,
      onErrorType: Actions.GET_SERVICES_ERROR,
    },
  };
});
