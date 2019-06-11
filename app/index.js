//import React from 'react'
var React = require('react') //CommonJS
var ReactDOM = require('react-dom')
require('./index.css')

/**
 * Component has state, lifecycle events & UI
 */
class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)