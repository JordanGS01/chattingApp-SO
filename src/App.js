
// IMPORTS REFERENTES A FIREBASE (TERCEROS)
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

// IMPORTS ENTIDADES FIREBASE
import { auth } from './firebase'

// IMPORTS PROPIOS - COMPONENTES Y ESTILOS
import './App.css';
import { MessagesContainer } from './components/Chat/MessagesContainer';
import ContenedorPrincipal from './components/ContenedorChats/ContenedorPrincipal'
import {NavegationBar} from './components/Navbar/NavegationBar'
import { Login } from './pages/auth/Login/Login';


function App() {

  const [ user ] = useAuthState(auth)

  return (
    <>
      {/* Si el usuario no está logueado, se le hace loguearse */}
      {
        user ?
        <>
        <NavegationBar />
        <div className='app'>
          <ContenedorPrincipal />
          <MessagesContainer />
        </div>
        </>
        :
        <Login />
      }
    </>
  );
}

export default App;
