import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export type GetPostsAction = (id?: number) => void;

export const getPosts = createAction(Actions.GET_POSTS, (id?: number) => {
  return {
    fetch: {
      url: 'posts/',
      onSuccessType: Actions.GET_POSTS_SUCCESS,
      onErrorType: Actions.GET_POSTS_ERROR,
      params: id || '',
    },
  };
});
