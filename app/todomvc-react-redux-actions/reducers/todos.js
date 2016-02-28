import { ADD_TODO } from '../constants/actionTypes.js';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
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

    default:
      return state
  }
}
