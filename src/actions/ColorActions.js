import GetColorConstants from '../constants/GetColorConstants';

const { GET_COLOR } = GetColorConstants;

export const getColor = () => ({
  type: `${GET_COLOR}_REQUEST`
});

export default {
  getColor
};
