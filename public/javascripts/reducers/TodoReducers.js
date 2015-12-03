import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, GET_SOME_DATA } from '../actions/TodoActions'

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
      console.log('onclick table row', action.index)
      console.log("state = ", ...state)
      var a = [
                      ...state.slice(0, action.index),
                       Object.assign({}, state[action.index], {completed: true }),
                      ...state.slice(action.index + 1)
                    ]
                    console.log("a = ", a)
      return [
        ...state.slice(0, action.index),
         Object.assign({}, state[action.index], {completed: true }),
        ...state.slice(action.index + 1)
      ]

    default:
      return state
  }
}

function filter(state = [], action={}) {
  console.log(action)
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.text

    case 'COMPLETE_FILTER':
      return action.filter

    default:
      return ''
  }

}

function datas(state = [], action={}) {
  switch (action.type) {
    case GET_SOME_DATA:
      console.log("come act =", action)
      console.log("come state =", state)

      history.pushState(null, '/');
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
  datas
})

export default todoApp