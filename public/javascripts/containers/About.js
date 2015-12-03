import React, { Component, PropTypes } from 'react'
import MyPagination from '../components/common/MyPagination'

export default class Table extends Component {
  render() {
    return (
      <div className="box">
        <table className="table table-condensed table-hover">
          <tbody>
          <tr><th>About</th></tr>
          <tr><td>v1</td></tr>
          </tbody>
        </table>

        <MyPagination openPage={(offset, limit) => {
                  console.log(offset, limit)
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