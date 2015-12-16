import * as todoAct from '../actions/TodoActions';

// stateについて知りたいならここを見る
export function todos(state = [], action = {}) {
  switch (action.type) {
    case todoAct.ADD_TODO:
      console.log('todos state =', state);
      history.pushState(state, '/');
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    case todoAct.COMPLETE_TODO:
      console.log('onclick table row', action.index);
      const a = [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], { completed: true }),
        ...state.slice(action.index + 1)
      ];
      console.log('a = ', a);
      return {
        todos: a,
        state
      };


    case todoAct.RECEIVE_POST_TODO:
      return [
        ...state,
        {
          text: action.data,
          completed: false
        }
      ];

    case todoAct.REQUEST_POST_TODO:
      console.log('post todo loading ');
      return state;

    default:
      return state;
  }
}

export function filter(state = [], action = {}) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      console.log('filter state =', state);
      console.log('filter action =', action);
      return action.text;

    case 'COMPLETE_FILTER':
      console.log('filter state =', state);
      console.log('filter action =', action);
      return action.filter;

    default:
      return '';
  }
}

export function datas(state = {}, action = {}) {
  switch (action.type) {
    case todoAct.GET_SOME_DATA:

      history.pushState(
        { backAction: action.opt.currentPage }
        , action.opt.currentPage
        , action.opt.nextPage
      );
      console.log('history = ', history);

      const gotData = { data: action.opt.nextPage + 'ページ目のデータ' };
      console.log('datas state changed =', gotData);

      return gotData;

    case todoAct.RECEIVE_GET_DATA:
      console.log('action.data = ', action.data);
      return action.data;

    case todoAct.REQUEST_GET_DATA:
      return 'Now loading...';

    default:
      return state;
  }
}

export function historyRed(state = {}, action = {}) {
  switch (action.type) {
    case 'BACK_PAGE':
      console.log('historyRed state =', state);
      console.log('historyRed act =', action);
      return state;

    default:
      return state;
  }
}
