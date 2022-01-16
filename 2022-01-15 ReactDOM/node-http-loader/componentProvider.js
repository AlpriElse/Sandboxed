import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()

app.get('/some-component', (req, res) => {
  const componentPath = path.resolve(__dirname, './SomeComponent.js')
  const componentSource = fs.readFileSync(componentPath, 'utf-8')
  res.send(componentSource)
})

app.listen(3000, () => console.log("Listening on port 3000"))