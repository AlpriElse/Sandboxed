import express from 'express'
import React from 'react'
import * as Server from 'react-dom/server'

import LargeComponent from './LargeComponent'

const app = express()

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/html')
  
  const readableReactStream = Server.renderToNodeStream(<LargeComponent />)
  readableReactStream.on('readable', () => {
    console.log('now readable')

    let chunk

    while ((chunk = readableReactStream.read()) !== null) {
      console.log(`Read ${chunk.length} bytes of data...`)
      console.log(chunk)
      res.write(chunk)
    }
  })

  readableReactStream.on('end', () => {
    console.log('Reached end of stream')
    res.end()
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

