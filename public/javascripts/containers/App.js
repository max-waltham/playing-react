import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router'

import { addTodo, completeTodo, changeFilter, getSomeData , SHOW_COMPLETED} from '../actions/TodoActions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import MyPagination from '../components/common/MyPagination'

var firstPopState = true

class App extends Component {

  constructor(props) {
    super(props);

    console.log("state =", this.state)



    window.onpopstate = function(e) {
      if (firstPopState) {
        firstPopState = false;
        return;
      }
      var path = document.location.toString().replace(document.location.origin, '');
      console.log("backAction=", e.state.backAction)
      console.log(e)
     // dispatch(e.state)
    }.bind(this)


  }

  _goAbout() {
      history.pushState(null,"", 'about');
      console.log(history)

  }


  render() {
    // Injected by connect() call:
    const { dispatch, todos, filter } = this.props
    return (

      <div className="row">
        <div className="col-md-8">
          <AddTodo
            onAddClick={ text =>
              dispatch(addTodo(text))
            }/>
        </div>

        <div className="col-md-8">
          <TodoList
            todos={todos}
            onTodoClick={ index =>
              dispatch(completeTodo(index))
            }/>
        </div>

        <div className="col-md-8">
        <Footer
          filter={filter}
          onFilterChange={ nextFilter =>
            dispatch(changeFilter(nextFilter))
          }/>
        </div>

        <div className="col-md-8">
          <MyPagination openPage={(offset, limit, pageNum) => {
                        dispatch(getSomeData(offset, limit, pageNum))
                      }}
                      conf={{
                        totalSize: 64,
                        pageSize: 12,
                        currentPage: 1
                      }}/>
        </div>

        <div className="col-md-12">
        <a className='btn' onClick={this._goAbout} >About page, route history sample</a>
        </div>
      </div>

    )

  }
}


App.propTypes = {
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

function selectTodos(todos, filter) {
  console.log("filter = ", filter)
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      console.log("test = ")
      return todos.filter(todo => todo.completed)

    default :
      return todos
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
// reducersの
function select(state) {
  console.log("state = ", state)
  return {
    todos: selectTodos(state.todos, state.filter),
    filter: state.filter

  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)