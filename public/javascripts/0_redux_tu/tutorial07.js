"use strict";

let tutorial07 = function() {
  console.log("===== 07 =====")
  var userReducer = function (state = {}, action = {}) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
      case 'SET_NAME':
        return {
          state: state,
          name: action.name
        }
      default:
        return state;
    }
  }

  var itemsReducer = function (state = [], action = {}) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
      case 'ADD_ITEM':
        return [
          ...state,
          action.item
        ]
      default:
        return state;
    }
  }

  var reducer = Redux.combineReducers({
    user: userReducer,
    items: itemsReducer
  })
  var store_0 = Redux.createStore(reducer)

  console.log("\n", '### It starts here')
  console.log('store_0 state after initialization:', store_0.getState())


  store_0.dispatch({
    type: 'AN_ACTION'
  })
  console.log('store_0 state after action AN_ACTION:', store_0.getState())

  var setNameActionCreator = function (name) {
    return {
      type: 'SET_NAME',
      name: name
    }
  }
  console.log("===== 07 2 =====")
  store_0.dispatch(setNameActionCreator('bob'))


};