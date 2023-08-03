import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import store from './JS/Store';
//import {MuiThemeProvider} from '@mui/material/core/styles';
//import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='Index'>
 
  <Provider store={store}>
    <App />
  </Provider>
  
</div>
);

