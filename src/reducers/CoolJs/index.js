import { combineReducers } from 'redux';

const reducers = {
  cooljs: require('./cooljs.js')
};

module.exports = combineReducers(reducers);
