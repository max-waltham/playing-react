"use strict";

var App = React.createClass({
  render: function () {
    return (
      <div className="box-header">
        <TodoApp name="2"/>
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById("app")
);

