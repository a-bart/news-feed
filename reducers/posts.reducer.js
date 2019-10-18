import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
  FETCH_TOP_POSTS,
  FETCH_TOP_POSTS_SUCCESS,
  FETCH_TOP_POSTS_FAIL,
  SELECT_POST,
} from '../constants/posts.constants';

const initialState = {
  loading: false,
  loadingBlocks: {},
  posts: {},
  topPosts: {},
  selectedPost: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOP_POSTS:
      return {
        ...state,
        loadingBlocks: {
          ...state.loadingBlocks,
          [action.payload.category]: true,
        },
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.category]: action.payload.data,
        },
        loading: false,
      };
    case FETCH_TOP_POSTS_SUCCESS:
      return {
        ...state,
        topPosts: {
          ...state.topPosts,
          [action.payload.category]: {
            ...action.payload.data,
          },
        },
        loadingBlocks: {
          ...state.loadingBlocks,
          [action.payload.category]: false,
        },
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_TOP_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingBlocks: {},
      };
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    default:
      return state;
  }
};
