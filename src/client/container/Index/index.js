import React, { Component } from 'react'
import TestComponent from '../../components/TestComponent'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    console.log('index will mount 1')
  }

  componentDidMount() {
    console.log('index did mount 2')
  }

  render() {
    return (
      <TestComponent />
    )
  }
}