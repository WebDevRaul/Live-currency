import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import firstCallReducer from './firstCallReducer';

export default combineReducers({
  errors: errorReducer,
  firstCall: firstCallReducer
});