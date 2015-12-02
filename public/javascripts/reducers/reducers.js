
const ADD_TODO = 'ADD_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
const { SHOW_ALL } = VisibilityFilters

/*
 * action creators
 */

 function addTodo(text) {
  return { type: ADD_TODO, text }
}

 function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

 function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

function visibilityFilter(state = SHOW_ALL, action={}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action ={}) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoApp = Redux.combineReducers({
  visibilityFilter,
  todos
})


