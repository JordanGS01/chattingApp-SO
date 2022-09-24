import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom' 
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import ContenedorPrincipal  from "../src/components/ContenedorChats/ContenedorPrincipal"
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ContenedorPrincipal />
    </BrowserRouter>
  </React.StrictMode>
);

//Pagina utilizada de referencia para los estilos retro
//https://nostalgic-css.github.io/NES.css/#
