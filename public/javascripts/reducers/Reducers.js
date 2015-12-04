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

const appReducer = combineReducers({
  todos,
  filter,
  datas,
  historyRed,
  aboutRed
})


export default appReducer