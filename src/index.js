import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "nes.css/css/nes.min.css";
import App from './App';


import { MessagesContainer } from './components/Chat/MessagesContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessagesContainer />
  </React.StrictMode>
);

