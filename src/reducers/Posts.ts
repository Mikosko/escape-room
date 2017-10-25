import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: ReducerState<User> = {
  wasLoaded: false,
  isLoading: false,
  error: false,
  data: {
    name: '',
    surname: '',
    age: 0,
    email: '',
  },
};

export const reducer = handleActions<ReducerState<User>>({
  [Actions.GET_POSTS]: (state, action) => {
    return {
      ...state,
      isLoading: true,
      error: false,
    };
  },
  [Actions.GET_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      wasLoaded: true,
      isLoading: false,
      error: false,
      data: {
        name: action.payload.name,
        age: action.payload.age,
        email: action.payload.email,
        surname: action.payload.surname,
      },
    };
  },
}, initialState);
