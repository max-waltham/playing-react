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


<div className="wrapper">
  <header className="main-header">
    <a href="../index2.html" className="logo">
      <span className="logo-mini"><b>A</b>LT</span>
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li><a href="http://almsaeedstudio.com">Almsaeed Studio</a></li>
          <li><a href="http://almsaeedstudio.com/premium">Premium Templates</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <aside className="main-sidebar">
    <div className="slimScrollDiv" >
      <div className="sidebar" id="scrollspy" >
        <ul className="nav sidebar-menu">
          <li className="header">CONTENTS</li>
          <li><Link to='/about' className="">about</Link><i className="fa fa-circle-o"></i></li>
          <li><Link to='/profile' className="">profile</Link><i className="fa fa-circle-o"></i></li>
          <li><Link to='/' className="">app</Link><i className="fa fa-circle-o"></i></li>
        </ul>
      </div>
      <div className="slimScrollRail"
           >
      </div>
    </div>
  </aside>
  <div className="content-wrapper" >
    <div className="content">
        { this.props.children }
    </div>
  </div>
  <footer className="main-footer">
    <div className="pull-right hidden-xs">
      <b>Version</b> 2.3.1
    </div>
    <strong>Copyright © 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
    reserved.
  </footer>
</div>

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



