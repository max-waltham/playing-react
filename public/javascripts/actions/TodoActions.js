
  let AddTodo = function (message) {

    return {
      type:"ADD_TODO",
      message
    }

  };

  let DeleteTodo = function (id) {

    return {
      type:"DELETE_TODO",
      id: id
    }

  };
