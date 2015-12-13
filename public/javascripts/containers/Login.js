import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class Login extends Component {



  render() {

    return (
      <div className="box">
        <h2>Login</h2>
      </div>
    )
  }
}

export default connect(state => state)(Login)
