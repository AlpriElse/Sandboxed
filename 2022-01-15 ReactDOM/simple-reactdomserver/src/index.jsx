import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>

console.log('renderToString ---')
console.log(Server.renderToString(<Greet/>))

console.log('renderToStaticMarkup ---')
console.log(Server.renderToStaticMarkup(<Greet/>))


console.log('renderToNodeStream ---')
const readable = Server.renderToNodeStream(<Greet />)
readable.on('readable', () => {
  let chunk
  console.log('Stream is readable')

  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`)
  }
})

readable.on('end', () => {
  console.log('Reached end of stream')
})

console.log()