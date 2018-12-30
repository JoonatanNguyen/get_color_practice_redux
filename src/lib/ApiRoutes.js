import config from '../config';

export default {
  get base() {
    return config.apiHost;
  },

  getRanking() {
    return `${this.base}/ranking`;
  },

  getColor() {
    return `${this.base}/practice`;
  }
};
