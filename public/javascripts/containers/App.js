import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { completeTodo, changeFilter } from '../actions/TodoActions';
import { getPageData, postTodo } from '../actions/TodoActions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import MyPagination from '../components/common/MyPagination';

const firstPopState = { st: true };

class App extends Component {

  constructor(props) {
    super(props);

    console.log('props =', props);
    console.log('state =', this.state);

    window.onpopstate = (e) => {
      console.log('e=', e);
      console.log('backAction=', e.state.backAction);
      if (firstPopState.st) {
        firstPopState.st = false;
        return;
      }

      window.onpopstate = (e2) => {
        console.log('e2=', e2);
        console.log('backAction=', e2.state.backAction);
        if (firstPopState.st) {
          firstPopState.st = false;
          return;
        }
        const path = document.location.toString().replace(document.location.origin, '');
        console.log('path =', path);
        // dispatch(e.state)
      };
      const path = document.location.toString().replace(document.location.origin, '');
      console.log('path =', path);
      // dispatch(e.state)
    };
  }

  componentDidMount() {
    // route components are rendered with useful information, like URL params
    console.log('pn=', this.props.params.pn);
  }

  _goAbout() {
    history.pushState(null, '', 'about');
    console.log(history);
  }

  render() {
    // Injected by connect() call:
    const { dispatch, todos, filter, datas } = this.props;
    return (
      <div className="row">

        <div className="col-md-8">
          <AddTodo
            onAddClick={ text =>
              dispatch(postTodo('./postTodo', 'text=' + text))
            }
          />
        </div>

        <div className="col-md-8">
          <TodoList
            todos={todos}
            onTodoClick={ index =>
              dispatch(completeTodo(index))
            }
          />
        </div>

        <div className="col-md-8">
        <Footer
          filter={filter}
          onFilterChange={ nextFilter =>
            dispatch(changeFilter(nextFilter))
          }
        />
        </div>

        <div className="col-md-8">
          <pre>{JSON.stringify(datas)}</pre>
        </div>
        <div className="col-md-8">
          <MyPagination openPage={(offset, limit, opt) => {
            dispatch(getPageData('./data/' + opt.nextPage));
          }}
            conf={{
              totalSize: 64,
              pageSize: 12,
              currentPage: 1
            }}
          />
        </div>

        <div className="col-md-12">
          <Link to="/About" className="">about (routing , history sample)</Link><br />
        </div>
        <div className="col-md-12">
          <Link to="/containers/About" className="">about (routing , history sample)</Link><br />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  datas: PropTypes.object,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    ''
  ]).isRequired,
  params: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.component).isRequired
};

function copyStateToProp(state) {
  console.log('GLOBAL FULL state =', state);
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(copyStateToProp)(App);
