import React from 'react';
import ReactDOM from 'react-dom/client';

import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import {NavegationBar} from './components/Navbar/NavegationBar'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavegationBar />
    <App />
  </React.StrictMode>
);

//Pagina utilizada de referencia para los estilos retro
//https://nostalgic-css.github.io/NES.css/#
