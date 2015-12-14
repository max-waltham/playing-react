import axios from 'axios';

export const LOGIN_REQUEST_ACT = 'LOGIN_REQUEST_ACT';

function requestLogin(reddit) {
  return {
    type: LOGIN_REQUEST_ACT,
    reddit
  };
}
export const LOGIN_RECEIVE_ACT = 'LOGIN_RECEIVE_ACT'
function receiveLogin(reddit, data) {
  return {
    type: LOGIN_RECEIVE_ACT,
    reddit,
    data: data,
    receivedAt: Date.now()
  };
}

export function loginAct(params) {
  // トリック
  return function (dispatch) {

    // 処理開始をDispatch（ローディングgifなど）
    dispatch(requestLogin(params));

    // 非同期のリクエスト
    return axios.post('/login', params)
      .then(response => response.data) // Promise が返る
      .then(data =>
        // 処理終了をDispatch（表示更新など）
        dispatch(receiveLogin(params, data))
    );
  };
}