

let SpeakerReducer = Redux.combineReducers({

  speaker: function (state = {}, action = {}) {

    switch (action.type) {
      case 'SAY':
        console.log('Speaker says: State->', state, 'Action->', action)
        return {
          state: state,
          message: action.message
        };

      default:
        return state;
    }
  }
});
