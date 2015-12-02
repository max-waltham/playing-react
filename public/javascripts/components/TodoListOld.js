let Todo = React.createClass({

  propTypes: {
    todo: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired
    })
  },

  _onClick() {
    this.props.deleteTodo(this.props.todo.id);
  },

  render() {
    return (
      <div>
        <span>{this.props.todo.text}</span>
        <button onClick={this._onClick}>Delete!</button>
      </div>
    );
  }
});


class TodoList extends React.Component {

  deleteTodo(id) {

    SpeakerStore.dispatch(SayActionCreator('Bye ' + id));
    let del = TodoStore.dispatch(DeleteTodo(id));
    console.log("del = ", del)

    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== del.id;
      })
    });
  }

  addTodo(id) {
    let ret = TodoStore.dispatch(AddTodo({id: "new", text: "added button"}));
    this.state.todos.push(ret.message)
    console.log("this.state = ", this.state)
    this.setState(this.state)
  }

  render() {
    console.log("this.state =", this.state)
    if (this.state != undefined) {
      let todos = this.state.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo deleteTodo={this.deleteTodo} todo={todo}/>
          </li>
        );
      });
      return (
        <div>
          <button onClick={this.addTodo}>add button</button>
          <ul>{todos}</ul>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.addTodo}>add button</button>
          <ul></ul>
        </div>
      );
    }
  }
}
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}
ReactRedux.connect(select)(TodoList);