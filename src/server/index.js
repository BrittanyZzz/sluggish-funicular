import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import Index from '../client/container/Index'
import React from 'react'
import { matchPath } from 'react-router-dom'

const app = express()

app.use(cors())

app.use(express.static('dist'))

app.get('*', (req, res, next) => {
  const markup = renderToString(
    <Index />
  )

  res.send(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Sluggish Funicular</title>
          <script src='/bundle.js' defer></script>
        </head>
        <body>
          <div id='app'>${markup}</div>
        </body>
      </html>
    `
  )
})

app.listen(3000, () => {
  console.log('Server is listening on 3000')
})