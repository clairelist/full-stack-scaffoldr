import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { render } from 'react-dom'
import App from './App'
import { CookiesProvider } from 'react-cookie';

render(
  <Router>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </Router>,
  document.getElementById('root')
)
