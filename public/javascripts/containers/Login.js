import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap';
import { loginAct } from '../actions/LoginActions'

export default class Login extends Component {

  render() {


    console.log("props =", this.props)
    console.log("state =", this.state)
    return (
      <div className="box">
        <h2>Login</h2>
        <input  className='form-control' type='text' ref='input' />
        <Button bsStyle="primary" onClick={ (e) => this._handleClick() }>Login</Button>
      </div>
    )
  }

  _handleClick() {
    const { dispatch } = this.props
    const node = this.refs.input
    const text = node.value.trim()

    dispatch(loginAct('user='+text))
    node.value = ''
  }
}

export default connect(state => state)(Login)
