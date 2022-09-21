import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "nes.css/css/nes.min.css";
import App from './App';
import Navbar from './components/Navbar/Navbar';

import { MessagesContainer } from './components/Chat/MessagesContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>
);

//https://nostalgic-css.github.io/NES.css/#
