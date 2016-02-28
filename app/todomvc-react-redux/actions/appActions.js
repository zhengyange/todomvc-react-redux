import * as types from '../constants/ActionTypes.js';
import {SET_FILTER} from '../constants/TodoFilters.js';

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function completeTodo(id){
	return {type: types.COMPLETE_TODO, id}
}

export function setFilter(filter){
	return {type: SET_FILTER, filter}
}
