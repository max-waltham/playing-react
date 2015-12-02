import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, GET_SOME_DATA } from './actions'

// stateについて知りたいならここを見る
function todos(state = [], action={}) {

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

function filter(state = [], action={}) {
  switch (action.type) {
    case 'COMPLETE_FILTER':
      return action.filter

    default:
      return ''
  }
}

function dataActions(state = [], action={}) {
  switch (action.type) {
    case GET_SOME_DATA:
      console.log("come here =", action)
      return  [
        ...state,
        {dlData:"ダウンロードしたデータ"}
      ]

    default:
      return ''
  }
}


const todoApp = combineReducers({
  todos,
  filter,
  dataActions
})

export default todoApp