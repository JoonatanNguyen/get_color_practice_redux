import createReducer from '../lib/utils/CreateReducer';
import GetColorConstants from '../constants/GetColorConstants';

const { GET_COLOR } = GetColorConstants;

export const getInitialState = () => ({
  loading: false,
  error: {},
  color: []
});

export default createReducer(getInitialState, {
  [`${GET_COLOR}_REQUEST`]: () => ({
    loading: true,
    error: {}
  }),
  [`${GET_COLOR}_SUCCESS`]: (state, { payload: color }) => ({
    loading: false,
    color
  }),
  [`${GET_COLOR}_FAILURE`]: (state, { payload: error }) => ({
    loading: false,
    error
  })
});
