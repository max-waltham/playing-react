"use strict";
let tutorial06 = function(){
  var reducer_1 = function (state = {}, action = {}) {
    console.log('reducer_1 was called with state', state, 'and action', action)

    switch (action.type) {
      case 'SAY_SOMETHING':
        return {
          state: state,
          message: action.value
        }
      case 'DO_SOMETHING':
      // ...
      case 'LEARN_SOMETHING':
      // ...
      case 'HEAR_SOMETHING':
      // ...
      case 'GO_SOMEWHERE':
      // ...
      // etc.
      default:
        return state;
    }
  }

  var userReducer = function (state = {}, action = {}) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
      // etc.
      default:
        return state;
    }
  }
  var itemsReducer = function (state = [], action = {}) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
      // etc.
      default:
        return state;
    }
  }

  var createStore = Redux.createStore
  var combineReducers = Redux.combineReducers

  var reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
  })
  var store_0 = createStore(reducer)
  console.log('store_0 state after initialization:', store_0.getState())

}
