import * as Actions from '../constants/actions';

export type GetPostsAction = (id?: number) => void;
export const getPosts: GetPostsAction = (id): FetcherAction => {
  return {
    type: Actions.GET_POSTS,
    fetch: {
      url: 'posts/',
      onSuccessType: Actions.GET_POSTS_SUCCESS,
      onErrorType: Actions.GET_POSTS_ERROR,
      params: id || '',
    },
  };
};
