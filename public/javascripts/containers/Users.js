

let User = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    id:   React.PropTypes.number.isRequired
  },
  render() {
    return (
      <div>{this.props.id}:{this.props.name}</div>
    );
  }
});

var request = require('superagent');

var Users = React.createClass({
  getInitialState() {
    return {
      users: [ {id: 1, name: "foo"}, {id: 2, name: "bar"} ]
    }
  },
  componentDidMount() {
    request.get('http://example.com/users/', (res) => {
      this.setState({users: res.body.users});
    });
  },
  render() {
    var users = this.state.users.map((user) => {
      return <User id={user.id} name={user.name} key={user.id}/>
    });
    return (
      <div>
        <p>ユーザー一覧</p>
        {users}
      </div>
    );
  }
});