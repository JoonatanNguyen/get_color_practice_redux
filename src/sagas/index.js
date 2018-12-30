import { fork, all } from 'redux-saga/effects';

import { getRanking } from './ranking';
import { getColor } from './colors';

export default function* root() {
  yield all([fork(getRanking), fork(getColor)]);
}
