import React, { Component, PropTypes } from 'react'

export default class Table extends Component {
  render() {
    return (
      <table className="table table-condensed table-hover">
        <tbody>
        {this.props.rows}
        </tbody>
      </table>
    )
  }
}

//Table.propTypes = {
//
//  rows: PropTypes.arrayOf(PropTypes.component.isRequired).isRequired
//
//}