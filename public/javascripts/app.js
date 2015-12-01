
let Provider = ReactRedux.Provider
console.log(todoApp)
let store = Redux.createStore(todoApp)

let rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

