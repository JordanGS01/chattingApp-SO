// IMPORTS PROPIOS DE REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom' 
//LIBRERIAS DE ESTILOS
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORTS PROPIOS - ESTILOS Y COMPONENTES
import './index.css';
import App from './App';
import { ChatProvider } from './context/ChatProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <ChatProvider>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChatProvider>
    </>
  </React.StrictMode>
);

//Pagina utilizada de referencia para los estilos retro
//https://nostalgic-css.github.io/NES.css/#
