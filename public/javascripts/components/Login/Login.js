import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import { loginAct } from '../../actions/LoginActions';

export default class Login extends Component {

  constructor(props) {
    super(props);

    console.log('constructor state =', this.state);
    console.log('c location.state.nextPathname =', props.location.state.nextPathname);
  }

  _handleClick(nextPathname) {
    const { dispatch } = this.props;
    const node = this.refs.input;
    const text = node.value.trim();

    dispatch(loginAct('user=' + text, nextPathname));
    node.value = '';
  }

  render() {
    console.log('props =', this.props);
    console.log('state =', this.state);
    return (
      <div className="box">
        <h2>Login</h2>
        <input className="form-control" type="text" ref="input" />
        <Button bsStyle="primary" onClick={ () => this._handleClick(this.props.location.state.nextPathname) }>Login</Button>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(Login);
