

let TodoReducer = Redux.combineReducers({

  addTodo: function (state = {}, action = {}) {

    switch (action.type) {
      case 'ADD_TODO':
        console.log(' State->', state, 'Action->', action)
        return {
          state: state,
          message: action.message
        };

      default:
        return state;
    }
  }
});
