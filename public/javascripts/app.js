"use strict";

import unique from 'uniq'
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(unique(data));

import TodoApp from "./components/TodoApp"
console.log(<TodoApp key="1"/>)

import tutorial05 from "./redux_tu/tutorial05"
tutorial05()

import tutorial06 from "./redux_tu/tutorial06"
tutorial06()
//
//
//var helloworld = require("./helloworld")
//
//
//// first component
//
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
//
//