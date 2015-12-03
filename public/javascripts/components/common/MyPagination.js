import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import __ from 'immutable'

class PageLink extends Component {
  render() {
    const { opened, text, nextPage, offset, limit } = this.props
    return (
      <li className={"paginate_button" + this.props.optClass}
        onClick={this.props.openPage}
        ><span style={{ cursor : 'pointer' }} >{text}</span></li>
    )
  }
}
PageLink.propTypes = {
  openPage: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  optClass: PropTypes.string.isRequired
};

export default class MyPagination extends Component {

  constructor(props) {
    super(props);
    this.state = {currentPage: props.conf.currentPage};
  }

  _handleChange(num) {
    this.setState({currentPage: num})
  }

  render() {
    const {currentPage} = this.state
    const {dispatch, conf} = this.props
    let maxPage = Math.ceil(conf.totalSize / conf.pageSize)
    return (
      <div className="">
        <div className="dataTables_paginate paging_simple_numbers" id="">
          <ul className="pagination">
            <PageLink optClass={"previous" +(currentPage !== 1 ? "":" disabled")}
                      key={"previous"}
                      text={"Previous"}
                      openPage={() => {
                        if(currentPage !== 1){
                          let nextPageNum = currentPage -1
                          this.props.openPage(((currentPage -2) * conf.pageSize), conf.pageSize, nextPageNum)
                          this._handleChange(nextPageNum)
                        }
                      }}/>

            {
            __.Range(1, maxPage+1).map( i =>
              <PageLink optClass={(i !== currentPage ? "" : " active")}
                        key={i}
                        text={i.toString()}
                        openPage={()=>{
                          if(currentPage !== i) {
                            this.props.openPage(((i-1) * conf.pageSize), conf.pageSize, i)
                            this._handleChange(i)
                          }
                        }}/>

            )
            }

            <PageLink optClass={"previous" +((currentPage !== maxPage)?"":" disabled")}
                      key={"next"}
                      text={"Next"}
                      openPage={() => {
                        if(currentPage !== maxPage){
                          let nextPageNum = currentPage +1
                          this.props.openPage(((currentPage) * conf.pageSize), conf.pageSize, nextPageNum)
                          this._handleChange(nextPageNum)
                        }
                      }}/>
          </ul>
        </div>
      </div>
    )
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

