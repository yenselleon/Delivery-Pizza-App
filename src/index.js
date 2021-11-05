import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppRouter } from './router/AppRouter';



ReactDOM.render(
    <App Component={AppRouter}/>,
  document.getElementById('root')
);

