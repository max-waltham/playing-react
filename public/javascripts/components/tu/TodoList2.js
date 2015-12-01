

let Provider = Redux.Provider
class Application extends React.Component {
  render () {
    return (
      <Provider store={ TodoStore }>
        <Home />
      </Provider>
    )
  }
}
