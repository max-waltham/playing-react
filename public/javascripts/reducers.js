import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO } from './actions'

// stateについて知りたいならここを見る
function todos(state = [], action) {

  console.log("state =",state, ...state)
  console.log("action =",action)
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]

    default:
      return state
  }
}

function filter(state = [], action) {
  switch (action.type) {
    case 'COMPLETE_FILTER':
      return action.filter

    default:
      return ''
  }
}


const todoApp = combineReducers({
  todos,
  filter
})

export default todoApp