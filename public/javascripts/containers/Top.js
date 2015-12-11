import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import { Link, State } from 'react-router';

import thunkMiddleware from 'redux-thunk';

import { addTodo, completeTodo, changeFilter, getSomeData , SHOW_COMPLETED} from '../actions/TodoActions'
import { getPageData, postTodo } from '../actions/TodoActions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import MyPagination from '../components/common/MyPagination'


class Top extends Component {

  componentDidMount() {
    // route components are rendered with useful information, like URL params
    console.log("pn=",this.props.params.pn)

  }

  constructor(props) {
    super(props);

    console.log("props =", props)
    console.log("state =", this.state)

    window.onpopstate = function(e) {
      console.log("e=",e)
      console.log("backAction=", e.state.backAction)
      if (firstPopState) {
        firstPopState = false;
        return;
      }

      window.onpopstate = function(e) {
        console.log("e=",e)
        console.log("backAction=", e.state.backAction)
        if (firstPopState) {
          firstPopState = false;
          return;
        }
        var path = document.location.toString().replace(document.location.origin, '');
        // dispatch(e.state)
      }.bind(this)
      var path = document.location.toString().replace(document.location.origin, '');
      // dispatch(e.state)
    }.bind(this)


  }

  _goAbout() {
    history.pushState(null,"", 'about');
    console.log(history)

  }

  render() {
    // Injected by connect() call:
    const { dispatch, todos, filter, datas} = this.props
    return (
        this.props.children
    )

  }
}


Top.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    ''
  ]).isRequired
}

function copyStateToProp(state) {
  console.log("GLOBAL FULL state =", state)
  return state
}

// Wrap the component to inject dispatch and state into it
export default connect(copyStateToProp)(Top)



