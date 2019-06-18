import React, { useState, useEffect } from 'react'
import { fetchFakeData } from '../../../service/api'

const Index = props => {
  useEffect(() => {
    fetchFakeData()
    .then(res => {
      console.log({res})
    }).catch(err => {
      console.log({err})
    })
  }, [])

  return (
    <div>Index here!</div>
  )
}

export default Index