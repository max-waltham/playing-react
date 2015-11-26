ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('c1')
);

// tutorial2.js
let CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

let CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
        {this.props.key}
      </div>
    );
  }
});

// tutorial1.js
let CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <h1>Comments</h1>
        <CommentList />
        {
          [1,2,3].map(a => {
            return <CommentForm key={a}/>;
          })
        }

      </div>
    );
  }
});

let ExampleBox = React.createClass({
  render: function() {
    return (
    <div className="box">
    <div className="box-header with-border">
      <h3 class="box-title">Title</h3>
    </div>

    <div className="box-body">
      <a href='/assets/lib/adminlte/index.html' target="_blank">AdminLTE Example</a>
    </div>
    <div className="box-body">
      <a href='/assets/lib/adminlte/index2.html' target="_blank">AdminLTE Example2</a>
    </div>
    </div>
    );
  }
});

ReactDOM.render( <ExampleBox />, document.getElementById('c2'));

