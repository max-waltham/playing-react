

let TodoReducer = Redux.combineReducers({

  addTodo: function (state = {}, action = {}) {

    switch (action.type) {

      case 'ADD_TODO':
        action.message.id = Math.random();
        return {
          state: state,
          message: action.message
        };

      case 'DELETE_TODO':

        return {
          state: state,
          message: action.id
        };

      default:
        return state;
    }
  }

});
