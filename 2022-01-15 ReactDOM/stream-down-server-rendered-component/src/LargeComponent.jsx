import React, { isValidElement } from 'react'

export default LargeComponent = () => {
  let ids = Array.from(Array(1000).keys())

  return (
    <div>
      {
        ids.map(id => (
          <h1 key={id}>Hello world {id}</h1>
        ))
      }
    </div>
  )
}