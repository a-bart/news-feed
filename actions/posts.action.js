import {
  FETCH_POSTS, FETCH_POSTS_FAIL, FETCH_POSTS_SUCCESS,
  FETCH_TOP_POSTS, FETCH_TOP_POSTS_FAIL, FETCH_TOP_POSTS_SUCCESS,
  SELECT_POST,
} from '../constants/posts.constants';

export const fetchPosts = (params) => ({ type: FETCH_POSTS, payload: params });
export const fetchPostsSuccess = (data, category) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { data, category },
});
export const fetchPostsFail = (error) => ({ type: FETCH_POSTS_FAIL, payload: error });

export const fetchTopPosts = (params) => ({ type: FETCH_TOP_POSTS, payload: params });
export const fetchTopPostsSuccess = (data, category) => ({
  type: FETCH_TOP_POSTS_SUCCESS,
  payload: { data, category },
});
export const fetchTopPostsFail = (error) => ({ type: FETCH_TOP_POSTS_FAIL, payload: error });

export const selectPost = (article) => ({ type: SELECT_POST, payload: article });
