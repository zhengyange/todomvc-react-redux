import {ADD_TODO, COMPLETE_TODO} from '../constants/ActionTypes.js';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  },
  {
    text: 'Use Redux111111111111111',
    completed: true,
    id: 1
  },
  {
    text: 'Use Redux22222222222222',
    completed: false,
    id: 2
  },

]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.length,
          completed: false,
          text: action.text
        }, 
        ...state
      ]
    case COMPLETE_TODO:
      return state.map((todo) => 
        todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
      )

    default:
      return state
  }
}
