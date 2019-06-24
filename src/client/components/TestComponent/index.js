import React, { Component } from 'react'

export default class TestComponent extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    console.log('Test Component will mount 1')
  }

  componentDidMount() {
    console.log('Test Component did mount 2')
  }

  render() {
    return(
      <div>Test Component</div>
    )
  }
}