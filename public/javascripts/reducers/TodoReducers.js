
import { backPage, ADD_TODO, COMPLETE_TODO, GET_SOME_DATA } from '../actions/TodoActions'
import { RECEIVE_POSTS } from '../actions/ajax'

// stateについて知りたいならここを見る
export function todos(state = [], action={}) {

  switch (action.type) {
    case ADD_TODO:
      console.log("todos state =", state)
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
      var a = [
                ...state.slice(0, action.index),
                 Object.assign({}, state[action.index], {completed: true }),
                ...state.slice(action.index + 1)
              ]
      console.log("a = ", a)
      return {
        todos: a,
        state
      }

    default:
      return state
  }
}

export function filter(state = [], action={}) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      console.log("filter state =", state)
      console.log("filter action =", action)
      return action.text

    case 'COMPLETE_FILTER':
      console.log("filter state =", state)
      console.log("filter action =", action)
      return action.filter

    default:
      return ''
  }
}

export function datas(state = ['初期データ'], action = {}) {
  switch (action.type) {
    case GET_SOME_DATA:

      history.pushState(
        { backAction: backPage(action.opt.currentPage) }
        ,action.opt.currentPage
        ,action.opt.nextPage
      );
      console.log("history = ", history)

      var gotData = [action.opt.nextPage +"ページ目のデータ"]
      console.log("datas state changed =", gotData)

      return gotData

    case RECEIVE_POSTS:

      return [JSON.stringify(action.data)]
    default:
      return ''
  }
}


export function historyRed(state = {}, action={}) {
  switch (action.type) {
    case 'BACK_PAGE':
      console.log("historyRed state =", state)
      console.log("historyRed act =", action)
      return state

    default:
      return state
  }
}


