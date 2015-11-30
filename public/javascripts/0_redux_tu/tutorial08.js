let tutorial08 = function () {
  console.log("===== 08 =====")

  var reducer = Redux.combineReducers({
    speaker: function (state = {}, action = {}) {
      console.log('speaker wcws', state, 'aa', action)

      switch (action.type) {
        case 'SAY':
          return {
            state: state,
            message: action.message
          };
        default:
          return state;
      }
    }
  });


  var store_0 = Redux.createStore(reducer);

  var sayActionCreator = function (message) {
    return {
      type: 'SAY',
      message
    }
  };
  store_0.dispatch(sayActionCreator('Hi'));

  console.log("---- 08 2");
  var asyncSayActionCreator_1 = function (message) {
    return function (dispatch) {
      setTimeout(function () {
        dispatch({
          type: 'SAY',
          message
        })
      }, 2000)
    }
  };

  //store_0.dispatch(asyncSayActionCreator_1('Hi 2'))

  console.log('SAY 2:', store_0.getState())
};