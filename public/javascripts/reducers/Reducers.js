import { combineReducers } from 'redux'


import {todos, filter, datas, historyRed} from './TodoReducers'


function aboutRed( state = {open:0 }, action = {}) {
  switch (action.type) {
    case 'OPEN':
      return {open: state.opened +1}
    default :
      return state
  }
}

function auth( state = {auth:{}}, action={}) {
  switch (action.type) {
    case 'LOGIN':
      { auth: { token: 'test' || '' } }
      return
    default :
      return state
  }
}

const appReducer = combineReducers({
  todos,
  filter,
  datas,
  historyRed,
  aboutRed,
  auth
})


export default appReducer
