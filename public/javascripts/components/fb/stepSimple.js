var ProductRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({

  render: function () {
    var rows = [];
    console.log("render now")
    this.props.products.forEach(function (product) {
      if (product.name.indexOf(this.props.filterText) >= 0) {
        rows.push(<ProductRow product={product} key={product.name}/>);
      }
    }.bind(this));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({

  handleChange: function () {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  },

  render: function () {
    return (
      <form className="form-group">
        <input type="text" placeholder="Search..."

          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
          />
      </form>
    );
  }

});

var FilterableProductTable = React.createClass({
  getInitialState: function () {
    return {
      filterText: ''
    };
  },

  handleUserInput: function (filterText) {
    this.setState({
      filterText: filterText
    });
  },

  _addButton: function(e){
    console.log(e)
    this.props.products.push({price: '$199.99', name: 'Nexus '+Math.random()})
    this.setState(this.state);
    console.log(this)
  },
  render: function () {
    return (
      <div className="box">
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
          />
        <button onClick={this._addButton}>add button</button>
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          />
      </div>
    );
  }
});


var PRODUCTS = [
  {price: '$49.99', name: 'Football'},
  {price: '$9.99', name: 'Baseball'},
  {price: '$29.99', name: 'Basketball'},
  {price: '$99.99', name: 'iPod Touch'},
  {price: '$399.99', name: 'iPhone 5'},
  {price: '$199.99', name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('container')
);
