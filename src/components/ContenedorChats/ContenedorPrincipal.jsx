import Busqueda from './Busqueda'
import { Routes, Route } from "react-router-dom";
import './ContenedorPrincipal.css'
import ListaChats from './ListaChats';
import ListaContactos from '../Contacts/ListaContactos';
import { IterateContacts,getCurrentUserName, getActiveChats } from '../../firebase'
import { useState } from 'react';
import { useEffect } from 'react';

const ContenedorPrincipal = () => {
  const [contacts,setContacts] = useState(undefined)
  const [activeChats, setActiveChats] = useState([])
  const [currentUser,setCurrentUser] = useState(undefined)

  const declareObjects = async() => {
      const currentUserData = await getCurrentUserName()
      const contactsData = await IterateContacts(currentUserData.user)
      const activeChatsData = await getActiveChats()
      setActiveChats(activeChatsData)
      setCurrentUser(currentUserData)
      setContacts(contactsData)
  }
  useEffect(() => {
    declareObjects()
  },[])

  if (contacts === undefined ) {
    return (
      <div className='caja-chats'>
      <div className='contenedor-busqueda'>
        <Busqueda/>
      </div>
      <div>
        Cargando ...
      </div>
      </div>
    )
  }
  return (
    <div className='caja-chats'>
      <div className='contenedor-busqueda'>
        <Busqueda/>
      </div>

    {/* Contenedor para los Chats */}
      <div className='contenedor-mensajes'>
        <Routes>
          <Route path='/' element = {<ListaChats activeChats={activeChats}  CurrentUserInfo = {currentUser}/>}/>
          <Route path='/Contacts' element = {<ListaContactos Contacts={contacts}  CurrentUserInfo = {currentUser} />}/>
        </Routes>
      </div>
    </div>
  )
}
    
export default ContenedorPrincipal;