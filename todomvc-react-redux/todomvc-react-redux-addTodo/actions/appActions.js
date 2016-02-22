import * as types from '../constants/ActionTypes.js';

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}
