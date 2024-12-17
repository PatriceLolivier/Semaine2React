import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MovieController } from "./context/MovieContent";
import { MovieDetails } from "./context/MovieDetails";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieController>
      <MovieDetails>
        <App />
      </MovieDetails>
    </MovieController>
  </React.StrictMode>,
)
