import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
  console.log("TodoList props = ", this.props)
    return (
    <div className="box ">
      <div className="box-header">
        <h3 className="box-title">Todo</h3>
      </div>
      <div className="box-body no-padding">
        <table className="table table-condensed">
          <tbody>
          {this.props.todos.map((todo, index) =>
            <Todo {...todo}
                  key={index}
                  onClick={() => this.props.onTodoClick(index)}
                  uObj={index}/>
          )}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,

  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}