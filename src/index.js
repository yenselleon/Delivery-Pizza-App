import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppRouter } from './router/AppRouter';



ReactDOM.render(
  <React.StrictMode>
    <App Component={AppRouter}/>
  </React.StrictMode>,
  document.getElementById('root')
);

