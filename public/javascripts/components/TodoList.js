import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import Table from './common/Table'

export default class TodoList extends Component {


  render() {
  console.log("TodoList props = ", this.props)
  console.log("TodoList state = ", this.state)
    return (
    <div className="box ">
      <div className="box-header">
        <h3 className="box-title">Todo</h3>
      </div>
      <div className="box-body no-padding">
        <Table rows={
          this.props.todos.map((todo, index) =>
            <Todo {...todo}
                  key={index}
                  onClick={() => this.props.onTodoClick(index)}
                  uObj={index}/>
          )
          }
        />
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
