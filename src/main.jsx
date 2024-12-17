import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MovieController } from "./context/MovieContent";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieController>
     <App />
    </MovieController>
  </React.StrictMode>,
)
