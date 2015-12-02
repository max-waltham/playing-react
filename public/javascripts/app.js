
let Provider = Redux.Provider

let store = Redux.createStore(todoApp)

let rootElement = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)