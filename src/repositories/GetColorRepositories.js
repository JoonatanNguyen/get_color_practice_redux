import routes from '../lib/ApiRoutes';
import { checkResponse, get } from '../lib/FetchHelper';

export default {
  getColor() {
    return get(routes.getColor()).then(checkResponse);
  }
};
