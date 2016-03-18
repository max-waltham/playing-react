import React, { Component, PropTypes } from 'react';
import __ from 'immutable';

export default class MyPagination extends Component {

  constructor(props) {
    super(props);
    this.state = { currentPage: props.conf.currentPage };
  }

  _handleChange(num) {
    this.setState({ currentPage: num });
  }

  render() {
    const { currentPage } = this.state;
    const { conf } = this.props;
    const maxPage = Math.ceil(conf.totalSize / conf.pageSize);
    return (
      <div className="">
        <div className="dataTables_paginate paging_simple_numbers" id="">
          <ul className="pagination">
            <li className={'paginate_button previous' + (currentPage !== 1 ? '' : ' disabled')}
              onClick={() => {
                if (currentPage !== 1) {
                  const nextPageNum = currentPage - 1;
                  this.props.openPage(
                    ((currentPage - 2) * conf.pageSize), conf.pageSize, { currentPage, nextPage: nextPageNum });
                  this._handleChange(nextPageNum);
                }
              }}
            >
              <span style={{ cursor: 'pointer' }}>Previous</span>
            </li>
            {
              __.Range(1, maxPage + 1).map(i =>
                <li className={'paginate_button' + (i !== currentPage) ? '' : ' active'}
                  onClick={() => {
                    if (currentPage !== i) {
                      this.props.openPage(((i - 1) * conf.pageSize), conf.pageSize, { currentPage, nextPage: i });
                      this._handleChange(i);
                    }
                  }}
                >
                  <span style={{ cursor: 'pointer' }}>{ i.toString() }</span>
                </li>
              )
            }
            <li className={'paginate_button next' + ((currentPage !== maxPage) ? '' : ' disabled')}
              onClick={() => {
                if (currentPage !== maxPage) {
                  const nextPageNum = currentPage + 1;
                  this.props.openPage(((currentPage) * conf.pageSize), conf.pageSize, { currentPage, nextPage: nextPageNum });
                  this._handleChange(nextPageNum);
                }
              }}
            >
              <span style={{ cursor: 'pointer' }}>Next</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

MyPagination.propTypes = {
  openPage: PropTypes.func.isRequired,
  conf: PropTypes.shape(
    {
      totalSize: PropTypes.number.isRequired,
      pageSize: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired
    }
  ).isRequired
};
