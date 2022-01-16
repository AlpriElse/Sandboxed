import React from 'react'
import ReactDOM from 'react-dom'

import Page from '../shared/Page'

ReactDOM.hydrate(
  <Page />, 
  document.getElementById('container')
)