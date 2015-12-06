
import { backPage, ADD_TODO, COMPLETE_TODO, GET_SOME_DATA, REQUEST_POST_TODO, RECEIVE_POST_TODO } from '../actions/TodoActions'

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


    case RECEIVE_POST_TODO:
      console.log('受け取ったデータ', action)
      return [action.data]

    case REQUEST_POST_TODO:
      return ['Now loading...']

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

export function datas(state = {}, action = {}) {
  switch (action.type) {
    case GET_SOME_DATA:

      history.pushState(
        { backAction: backPage(action.opt.currentPage) }
        ,action.opt.currentPage
        ,action.opt.nextPage
      );
      console.log("history = ", history)

      var gotData = {data: action.opt.nextPage +"ページ目のデータ"}
      console.log("datas state changed =", gotData)

      return gotData

    case RECEIVE_POST_TODO:
      return action.data

    case REQUEST_POST_TODO:
      return 'Now loading...'

    default:
      return state
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



