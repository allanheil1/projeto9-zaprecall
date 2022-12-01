import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/reset.css'
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(
  <React.StrictMode>
    <h1>Ola!!!!</h1>
    <App />
  </React.StrictMode>
)


