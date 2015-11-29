"use strict";

var TodoApp = require("/components/TodoApp")

// first component



var App = React.createClass({
  render: function() {
    return (
      <div className="box-header">
       <TodoApp />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById("app")
);


