import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { store } from './Redux/store';
import { Provider as ReduxProvider} from  "react-redux";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider> 
    </BrowserRouter>
   
  </React.StrictMode>
)
