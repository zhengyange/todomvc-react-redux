import * as types from '../constants/actionTypes.js';

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}
