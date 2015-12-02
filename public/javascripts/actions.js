
/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const GET_SOME_DATA = 'GET_SOME_DATA'


/*
 * action creators
 */
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}


export function someAct(index) {
  return { type: 'SOME_ACT', index }
}

export function getSomeData(offset, limit) {
  return { type: GET_SOME_DATA, offset:offset, limit:limit }
}
