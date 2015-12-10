import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MyPagination from '../components/common/MyPagination'
import openAbout from '../actions/AboutActions'

export default class About extends Component {

  componentDidMount(){
    this.props.dispatch(openAbout())
  }

  render() {

    return (
      <div className="box">
        <table className="table table-condensed table-hover">
          <tbody>
          <tr><th>About</th></tr>
          <tr><td>v1</td></tr>
          <tr><td>{this.props.aboutRed.open}</td></tr>
          </tbody>
        </table>

        <MyPagination openPage={(offset, limit, pn) => {
                  console.log(offset, limit, pn)
                }}
              conf={{
              totalSize: 64,
                pageSize: 12,
                currentPage: 1
            }}/>
      </div>
    )
  }
}

export default connect(state => state)(About)
