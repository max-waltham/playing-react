import axios from 'axios';

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const GET_SOME_DATA = 'GET_SOME_DATA'

export const REQUEST_POST_TODO = 'REQUEST_POST_TODO';
function requestPostTodo(reddit) {
  return {
    type: REQUEST_POST_TODO,
    reddit
  };
}

export const RECEIVE_POST_TODO = 'RECEIVE_POST_TODO'
function receivePostTodo(reddit, data) {
  return {
    type: RECEIVE_POST_TODO,
    reddit,
    data: data,
    receivedAt: Date.now()
  };
}

export function postTodo(url_, postData) {
  // トリック
  return function (dispatch) {

    // 処理開始をDispatch（ローディングgifなど）
    dispatch(requestPostTodo(postData));

    // 非同期のリクエスト （Promise が返る）
    return axios.post(url_, postData, {})
            .then(response => {
              // 処理終了をDispatch（表示更新など）
              dispatch(receivePostTodo(postData, response.data ))
            })
            .catch((e) => console.log("e = ", e));
  };
}

/////////////////////
export function fetchGets(url_, params) {
  // トリック
  return function (dispatch) {

    // 処理開始をDispatch（ローディングgifなど）
    dispatch(requestPosts(params));

           // 非同期のリクエスト
    return axios.get(url_, params)
            .then(response => response.data) // Promise が返る
            .then(data =>
              // 処理終了をDispatch（表示更新など）
              dispatch(receivePosts(params, data))
            );
  };
}

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

export function getSomeData(offset, limit, opt) {
  return { type: GET_SOME_DATA, offset: offset, limit: limit, opt: opt }
}


export function backPage(pageNum) {
  return { type: 'BACK_PAGE', page: pageNum}
}

