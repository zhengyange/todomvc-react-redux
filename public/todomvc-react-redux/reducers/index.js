import { combineReducers } from 'redux'
import todos from './todos.js';
import filter from './filter.js';

const rootReducer = combineReducers({
  todos,
  filter
})

export default rootReducer
