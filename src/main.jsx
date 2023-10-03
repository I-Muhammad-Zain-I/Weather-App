import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UnitContextProvider } from './context/UnitContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <UnitContextProvider>
        <App />

        </UnitContextProvider>
  
  </React.StrictMode>,
)
