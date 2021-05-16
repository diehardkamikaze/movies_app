import { createStore /* , applyMiddleware, combineReducers */ } from 'redux';
// import createSagaMiddleWare from 'redux-saga';
// import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { NOTHING_TXT } from '../constants';

const store = createStore(rootReducer, {
  Response: 'False', Error: NOTHING_TXT, totalResults: '-1', Search: [],
});

export default store;
