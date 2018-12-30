import { takeEvery, put, call } from 'redux-saga/effects';

import GetColorConstants from '../constants/GetColorConstants';
import GetColorRepositories from '../repositories/GetColorRepositories';

const { GET_COLOR } = GetColorConstants;

export function* getColor() {
  yield takeEvery(`${GET_COLOR}_REQUEST`, function*() {
    try {
      const color = yield call(GetColorRepositories.getColor);

      yield put({
        type: `${GET_COLOR}_SUCCESS`,
        payload: color
      });
    } catch (errors) {
      yield put({
        type: `${GET_COLOR}_FAILURE`,
        payload: errors
      });
    }
  });
}
