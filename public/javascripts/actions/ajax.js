
import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit,
    data: json,
    receivedAt: Date.now()
  };
}
// （同じfunctionにしてtypeでrequestとreceiveを分ける方法もあり）

export function fetchPosts(url_, postData) {
  // トリック
  return function (dispatchF) {

    // 処理開始をDispatch（ローディングgifなど）
    dispatchF(requestPosts(postData));

    // 非同期のリクエスト （Promise が返る）
    return axios.post(url_, postData, {})
            .then(response => response.data )
            .then(data =>
              // 処理終了をDispatch（表示更新など）
              dispatchF(receivePosts(postData, data))
            );
  };
}


export function fetchGets(url_, params) {
  // トリック
  return function (dispatchF) {

    // 処理開始をDispatch（ローディングgifなど）
    dispatchF(requestPosts(postData));

           // 非同期のリクエスト
    return axios.get(url_, params)
            .then(response => response.json()) // Promise が返る
            .then(json =>
              // 処理終了をDispatch（表示更新など）
              dispatchF(receiveGets(json, params))
            );
  };
}