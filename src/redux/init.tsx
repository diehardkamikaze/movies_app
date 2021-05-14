import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import sortReducer from './reducers/sortReducer';

const sagaMiddleWare = createSagaMiddleWare();

const rootReducer = combineReducers({
  sortReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

export default store;
