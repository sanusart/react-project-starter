import { createStore, applyMiddleware } from 'redux';
import reduders from '../../reducers/CoolJs';

import getServerDataMiddleware from '../../middleware/CoolJs/requests';

const createStoreWithMiddleware = applyMiddleware(
  getServerDataMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reduders, initialState);
}
