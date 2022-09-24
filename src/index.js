// IMPORTS PROPIOS DE REACT
import React from 'react';
import ReactDOM from 'react-dom/client';

//LIBRERIAS DE ESTILOS
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORTS PROPIOS - ESTILOS Y COMPONENTES
import './index.css';
import App from './App';
import { Login } from './pages/auth/Login/Login';
import { SignUp } from './pages/auth/Signin/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUp />
    {/* <Login /> */}
  </React.StrictMode>
);

//Pagina utilizada de referencia para los estilos retro
//https://nostalgic-css.github.io/NES.css/#
