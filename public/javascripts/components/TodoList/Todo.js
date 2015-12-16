import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

  componentDidMount() {
    // route components are rendered with useful information, like URL params
    console.log('componentDidMount text=', this.props.text);
  }

  render() {
    return (
      <tr>
        <td onClick={this.props.onClick}>
        {this.props.text} {this.props.uObj}
        </td>
      </tr>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  uObj: PropTypes.object
};
