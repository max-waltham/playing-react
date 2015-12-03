
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
  return {
    type: ADD_TODO,
    text
  }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}


export function changeFilter(text) {
  return { type: 'CHANGE_FILTER', text }
}

export function getSomeData(offset, limit, pageNum) {
  return { type: GET_SOME_DATA, offset:offset, limit:limit, pageNum: pageNum }
}


export function backPage(pageNum) {
  return { type: 'BACK_PAGE', page: pageNum}
}

