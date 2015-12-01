import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (

      <tr>
        <td
          onClick={this.props.onClick}
//        style={{
//          textDecoration: this.props.completed ? 'line-through' : 'none',
//          cursor: this.props.completed ? 'default' : 'pointer'
//        }}
        >
        {this.props.text} {this.props.uObj}
        </td>
      </tr>

    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}