import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class Profile extends Component {

  constructor(props) {
    super(props);

    console.log("props =", props)
    console.log("state =", this.state)
  }
  render() {

    console.log("stState()",this)
    return (
      <div className="box">

        <table className="table table-condensed table-hover">
          <tbody>
          <tr><th>Profile</th></tr>
          <tr><td>v1</td></tr>
          <tr><td></td></tr>
          </tbody>
        </table>


      </div>
    )
  }
}


export default connect(state => state)(Profile)
