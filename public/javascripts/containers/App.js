import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, someAct } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, todos, filter } = this.props
    return (

      <div className="row">

        <div className="col-md-8">
          <AddTodo
            onAddClick={ text =>
              dispatch(addTodo(text))
            } />
        </div>
        <div className="col-md-8">
          <TodoList
            todos={todos}
            onTodoClick={ index =>
              dispatch(completeTodo(index))
            } />
        </div>
        <Footer
          filter={filter}
          onFilterChange={ nextFilter =>
            dispatch(someAct(nextFilter))
          } />
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
console.log("todos = ", todos)
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)

    default :
      return todos
  }

}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    todos: selectTodos(state.todos, state.filter),

    filter: state.filter
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)