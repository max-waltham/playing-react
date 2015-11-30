let tutorial11 = function () {
  console.log('===== 11 =====');

  let itemsReducer = function (state = [], action = {}) {
    switch (action.type) {
      case "ADD_ITEM":
        return [
          ...state, action.item
        ];
      default :
        return state;
    }
  };

  let reducer = Redux.combineReducers({items: itemsReducer})
  let store_0 = Redux.createStore(reducer)

  store_0.subscribe(function() {
    console.log("store_0 update",store_0.getState())
    //TODO
  })

  let addItemActionCreator = function (item) {
    return {
      type: "ADD_ITEM",
      item: item
    }
  }

  store_0.dispatch(addItemActionCreator({id:12, description: "toys"}))

};