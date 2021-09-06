import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import BaaS from 'minapp-sdk'
import './index.css'
import App from './App'

BaaS.init('a4d2d62965ddb57fa4d6', { env: '2dff565f980ee7a7096c' })

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
