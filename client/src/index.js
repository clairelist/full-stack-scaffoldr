import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { render } from 'react-dom'
import App from './App'
import { CookiesProvider } from 'react-cookie'; //HEY CLAIRE REMEMBER TO DELETE ME! AUTHENTICATION IS ALL BEING HANDLED SERVER-SIDE !

render(
  <Router>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </Router>,
  document.getElementById('root')
)
