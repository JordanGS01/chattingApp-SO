import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "nes.css/css/nes.min.css";
//import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavegationBar} from './components/Navbar/NavegationBar'
import { MessagesContainer } from './components/Chat/MessagesContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer'
import { AddContact } from './components/Contacts/addContact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavegationBar />
    <AddContact Username={"Leandro sdasssssdasdasdasdasdada"}></AddContact>
  </React.StrictMode>
);

//https://nostalgic-css.github.io/NES.css/#
