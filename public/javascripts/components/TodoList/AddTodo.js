import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {

  handleClick(e) {
    console.log('e =', e);
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (

    <div className="box box-primary ">
      <div className="box-header with-border">
        <h3 className="box-title">Todo Example</h3>
      </div>
      <div className="box-body">
        <input className="form-control" type="text" ref="input" />
        <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    </div>

    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
