ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('c1')
);

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('c2')
);