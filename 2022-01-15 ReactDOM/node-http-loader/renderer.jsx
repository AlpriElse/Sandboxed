import express from 'express'
import React from 'react'
import * as Server from 'react-dom/server'

const app = express()

app.get('/', async (req, res) => {
  const SomeComponent = await import('http://localhost:3000/some-component')
  console.log(SomeComponent)
  const output = Server.renderToString(<SomeComponent/>)
  res.send(output)
})

app.listen(5000, () => console.log('Listening on port 5000'))