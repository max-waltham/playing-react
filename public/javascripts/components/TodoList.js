
let Todo = React.createClass({

  propTypes: {
    todo: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired
    })
  },

  // 親に処理を委譲する
  _onClick() {
    console.log("_onClick", this.props.todo.id)
    console.log("vals = ", SpeakerStore)
    var a = SpeakerStore.dispatch(SayActionCreator('Hi ' + this.props.todo.id));
    console.log("a = ", a)

  },

  render() {
    return (
      <div>
        <span>{this.props.todo.text}</span>
        <button onClick={this._onClick}>Say Hello!</button>
      </div>
    );
  }

});

let TodoList = React.createClass({

  getInitialState() {
    return {
      todos: [
        {id:1, text:"advent calendar1"},
        {id:2, text:"advent calendar2"},
        {id:3, text:"advent calendar3"}
      ]
    };
  },

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  },

  _addButton(id) {

    var a = TodoStore.dispatch(AddTodo({id:"mock", text:"added button"}));
    console.log("this.state.todos = ", this.state.todos)
  },

  render() {
    var todos = this.state.todos.map((todo) => {
      return <li key={todo.id}><Todo onDelete={this.deleteTodo} todo={todo} /></li>;
    });
    return (
      <div>
        <ul>{todos}</ul>
        <button onClick={this._addButton}>add button</button>
      </div>
    );
  }
});