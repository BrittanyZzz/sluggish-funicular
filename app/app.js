import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from '../container/Index'
import Page from '../container/Page'

/**
 * Component has state, lifecycle events & UI
 */
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/page' component={Page} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)