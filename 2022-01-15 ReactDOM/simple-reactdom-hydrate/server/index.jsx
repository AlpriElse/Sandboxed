import express from 'express'
import React from 'react'
import * as Server from 'react-dom/server'

import fs from 'fs'
import path from 'path'

const app = express()
const PORT = 3000

import Page from '../shared/Page'

const templatePath = path.resolve(__dirname, '../dist/index.html')

app.get('/', async (req, res) => {
  
  const htmlTemplate = fs.readFileSync(templatePath, 'utf-8')
  const MARKER ='<!-- some-id-->'

  const renderedReact = Server.renderToString(<Page/>)

  res.send(htmlTemplate.replace(MARKER, renderedReact))
})
app.use('/', express.static('dist'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))