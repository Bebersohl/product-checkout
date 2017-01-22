import { call, put, takeLatest } from 'redux-saga/effects'
import fetchProducts from './api/index'
import * as types from './actions/constants';

function* fetchItems(action) {
  try {
    const items = yield call(fetchProducts)
    yield put({type: types.FETCH_ITEMS_SUCCEEDED, items})
  } catch (error) {
    yield put({type: types.FETCH_ITEMS_FAILED, error})
  }
}

export default function* watchFetchItems() {
  yield takeLatest(types.FETCH_ITEMS_REQUESTED, fetchItems)
}