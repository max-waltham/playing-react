let tutorial10 = function () {
  console.log("===== 10 =====")

  var thunkMiddleware = function ({ dispatch, getState }) {
    console.log('= Enter thunkMiddleware');
    return function (next) {
      console.log('= Function "next" provided:');
      return function (action) {
        console.log('= Handling action:');
        return typeof action === 'function' ?
          action(dispatch, getState) :
          next(action)
      }
    }
  };

  const finalCreateStore = Redux.applyMiddleware(thunkMiddleware)(Redux.createStore)

  var reducer = Redux.combineReducers({
    speaker: function (state={}, action={}) {
      switch (action.type){
        case 'SAY':
          return {state:state, message: action.message};
        default:
          return state
      }
    }
  });
  const store_0 = finalCreateStore(reducer)

  var asyncSayActionCreator_1 = function (message) {
    return function (dispatch) {
      setTimeout(function () {
        console.log(new Date(), 'Dispatch action now:')
        dispatch({
          type: 'SAY',
          message
        })
      }, 2000)
    }
  };


  console.log("\n", new Date(), 'Running our async action creator:', "\n")

  store_0.dispatch(asyncSayActionCreator_1('Hi'))

  console.log("== 10 2 ")
  function logMiddleware ({ dispatch, getState }) {
    return function(next) {
      return function (action) {
        console.log('logMiddleware action received:', action)
        return next(action)
      }
    }
  }

  const finalCreateStore2 = Redux.applyMiddleware(logMiddleware, thunkMiddleware)(Redux.createStore)

  const store_1 = finalCreateStore2(reducer)
  store_1.dispatch(asyncSayActionCreator_1('Hi'))

  function discardMiddleware ({ dispatch, getState }) {
    return function(next) {
      return function (action) {
        console.log('discardMiddleware action received:', action)
      }
    }
  }

};