import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';
import { FETCH_POSTS, FETCH_TOP_POSTS } from '../constants/posts.constants';
import {
  fetchPostsFail, fetchPostsSuccess, fetchTopPostsFail, fetchTopPostsSuccess,
} from '../actions/posts.action';
import { checkMemo } from '../utils/common';
import * as api from '../api';

function* fetchPosts(action) {
  const { category } = action.payload;
  const params = {
    ...action.payload,
    country: 'us',
  };

  try {
    const posts = yield call(api.getEverything, params);
    yield put(fetchPostsSuccess(posts, category));
  } catch (err) {
    yield put(fetchPostsFail(err));
  }
}

function* fetchTopPosts(action) {
  const { category } = action.payload;
  const params = {
    ...action.payload,
    country: 'us',
  };

  try {
    const stateProps = yield select((state) => state.posts);

    if (stateProps.topPosts[category]
      && stateProps.topPosts[category]
      && checkMemo(stateProps.topPosts[category].updatedAt)) {
      yield put(fetchTopPostsSuccess(stateProps.topPosts[category], category));
    } else {
      const posts = yield call(api.getTopHeadlines, params);
      const data = {
        ...posts,
        updatedAt: new Date().toISOString(),
      };
      yield put(fetchTopPostsSuccess(data, category));
    }
  } catch (err) {
    yield put(fetchTopPostsFail(err));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
  yield takeEvery(FETCH_TOP_POSTS, fetchTopPosts);
}
