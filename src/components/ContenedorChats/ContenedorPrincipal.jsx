import Busqueda from './Busqueda'
import { Routes, Route } from "react-router-dom";
import './ContenedorPrincipal.css'
import ListaChats from './ListaChats';
import ListaContactos from '../Contacts/ListaContactos';
import { IterateContacts,getCurrentUserName } from '../../firebase'
import { useState } from 'react';
import { useEffect } from 'react';
import { IterateChats } from '../../firebase/firestore/iterateChats';
const ContenedorPrincipal = () => {
  const [contacts,setContacts] = useState(undefined)
  const [activeChats, setActiveChats] = useState([])
  const [currentUser,setCurrentUser] = useState(undefined)

  const declareObjects = async() => {
      const currentUserData = await getCurrentUserName()
      const contactsData = await IterateContacts(currentUserData.user)
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
        Cargando
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
          <Route path='/' element = {<ListaChats />}/>
          <Route path='/Contacts' element = {<ListaContactos Contacts={contacts}  CurrentUserInfo = {currentUser} />}/>
        </Routes>
      </div>
    </div>
  )
}
    
export default ContenedorPrincipal;