import * as React from "react"
import { Helmet } from 'react-helmet'

import imagine from '../images/imagine.png'

const pageStyles = {
  color: "#333139",
  padding: "2em .4em",
  fontFamily: "Roboto, sans-serif, serif",
  textAlign: 'center'
}

const subWord = {
  display: 'inline-block'
}

const displayText = {
  fontSize: '3rem',
  color: '#91D7F2',
  wrap: 'wrap'
}

const illinoisText ={
  color: '#F2955E',
  ...subWord
}

const imageStyles = {
  maxWidth: '200px',
  minWidth: '50%'
}

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Sandboxed@Illinois</title>
      </Helmet>
      <main style={pageStyles}>
        <h1 style={displayText}>
          <span style={subWord}>Sandboxed</span><span style={illinoisText}>@Illinois</span>
        </h1>
        <h2 style={{ fontSize: '2rem'}}>Coming soon.</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img
            alt="Imagine."
            src={imagine}
            style={imageStyles}
          />
        </div>
      </main>
    </>
  )
}

export default IndexPage
