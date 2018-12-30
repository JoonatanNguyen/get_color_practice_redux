import { combineReducers } from 'redux';

import Ranking from './RankingReducer';
import Color from './ColorReducer';

export default combineReducers({
  Ranking,
  Color
});
