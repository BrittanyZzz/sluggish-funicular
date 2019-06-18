import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from '../container/Index'
import Page from '../container/Page'

/**
 * Component has state, lifecycle events & UI
 * 
 * client side use browser router but not suitable in server side
 */
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/page' component={Page} />
          <Route render={() => <p>Not Found Yet!</p>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

// Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML
ReactDOM.hydrate(
  <App />,
  document.getElementById('app')
)