
//IMPORTS PORPIOS DE REACT
import { useContext } from 'react'

// IMPORTS REFERENTES A FIREBASE (TERCEROS)
import { useAuthState } from 'react-firebase-hooks/auth'

// IMPORTS ENTIDADES FIREBASE
import { auth } from './firebase'

// IMPORTS PROPIOS - COMPONENTES Y ESTILOS
import './App.css';
import { MessagesContainer } from './components/Chat/MessagesContainer';
import ContenedorPrincipal from './components/ContenedorChats/ContenedorPrincipal'
import { NavegationBar } from './components/Navbar/NavegationBar'
import { Login } from './pages/auth/Login/Login';

import {Translate} from './components/translate/translatecomp' 

import { ChatContext } from './context/ChatContext'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { Button } from 'react-bootstrap';
function App() {
  
  const [ user ] = useAuthState(auth)
  const {chat} = useContext(ChatContext) 

  return (
  <>
      {/* Si el usuario no está logueado, se le hace loguearse */}
      {
        user ?
        <>
        
        <NavegationBar />
        <div className='app'>
          <ContenedorPrincipal />
          {chat.id ?
          <MessagesContainer />:
          <div className='no-Chat-container'>
            Empieza a chatear ya!!
            <Button variant='light' className='no-Chat-contacts-button' href='/Contacts'>
                <AiOutlinePlusSquare/>
                Go to your contacts!
            </Button>
          </div>
          } 
        </div>

        
        </>
        :
        
        <Login />
      }
  </>
  );
}

export default App;
