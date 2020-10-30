import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import AppProvider from "./contexts/AppContext"

ReactDOM.render(
  
  <BrowserRouter>
    <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

