import React, { useState } from 'react'

export default Page = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}