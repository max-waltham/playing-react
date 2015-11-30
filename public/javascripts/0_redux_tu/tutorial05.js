"use strict";
let tutorial05 = function () {

  var createStore = Redux.createStore
  var store_0 = createStore(() => {})

  var reducer_0 = function (state, action) {
    console.log('reducer_0 was called with state', state, 'and action', action)
  }

  var store_0 = createStore(reducer_0)

  console.log('store_0 state after initialization:', store_0.getState())

  var reducer_1 = function (state, action) {
    console.log("reducer_1 was called with state", state, "and action", action)

    if (typeof state === "undefined") {
      return {}
    } else {
      return state
    }
  }

  var store_1 = createStore(reducer_1)
  console.log('store_1 state after initialization:', store_1.getState())

  var reducer_2 = function (state = {}, action = (() => {})) {
    console.log('reducer_2 was called with state', state, 'and action', action)
    return state;
  }
  var store_2 = createStore(reducer_2)

  var reducer_3 = function (state = {}, action = (() => {})) {
    console.log('reducer_3 was called with state', state, 'and action', action)

    switch (action.type) {
      case 'SAY_SOMETHING':
        return {
          state: state,
          message: action.value
        }
      default:
        return state;
    }
  }


  var store_3 = createStore(reducer_3)
  console.log('store_3 state after initialization:', store_3.getState())

}


