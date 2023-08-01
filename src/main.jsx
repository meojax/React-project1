import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import mainPage from './mainPage.jsx'
import Menu from './menu.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <mainPage/>
    <Menu/>
    <App/>
  </React.StrictMode>,
)