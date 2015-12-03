import { combineReducers } from 'redux'
import { backPage, ADD_TODO, COMPLETE_TODO, GET_SOME_DATA } from '../actions/TodoActions'

// stateについて知りたいならここを見る
function todos(state = [], action={}) {

  switch (action.type) {
    case ADD_TODO:

      history.pushState(state, '/');
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

      history.pushState({
        backAction: backPage(action.pageNum)
      }, action.pageNum);
      console.log("history = ", history)
      return  [
        ...state,
        {dlData:"ダウンロードしたデータ"}
      ]

    default:
      return ''
  }
}


function historyRed(state = [], action={}) {
  switch (action.type) {
    case 'BACK_PAGE':
      console.log("come act =", action)
      console.log("come state =", state)

      return  [
        ...state
      ]

    default:
      return ''
  }
}



const todoApp = combineReducers({
  todos,
  filter,
  datas,
  historyRed
})


export default todoApp