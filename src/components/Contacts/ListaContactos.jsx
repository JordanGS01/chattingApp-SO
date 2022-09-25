
import CajaContacto from './CajaContacto'

import { useState,useEffect } from 'react'
import { IterateContacts } from '../../firebase'

import src from "./Bulbasaur.png"
const ListaContactos = () => {
  const [userContacts,setUserContacts] = useState([])
  const createContact = () =>{
    const contactos = IterateContacts("Victor")
    contactos.then( res => setUserContacts(res))
  }
  useEffect(() => {
    createContact()
  })
  return (
    <div className='ListaContactos'>
        {userContacts.map((contact) =>
          { 
          return(

            <CajaContacto
                nombre = {contact.userName}
                fotoPerfil = {""}
                bloqueado = {true} />
          )
          }
        )
      }
      <CajaContacto
                nombre = {"prueba"}
                fotoPerfil = {src}
                bloqueado = {true} />
    </div>
  )
}

export default ListaContactos