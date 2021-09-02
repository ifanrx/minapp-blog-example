import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import BaaS from 'minapp-sdk'
import App from './App'
import './index.css'

BaaS.init('a4d2d62965ddb57fa4d6')

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
