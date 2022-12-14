
import CajaContacto from './CajaContacto'
import { useState,useEffect } from 'react'



const ListaContactos = ({Contacts,CurrentUserInfo}) => {

  const [userContacts,setUserContacts] = useState(undefined)
  
  const createContact = async() =>{
    setUserContacts(Contacts)
  }
  useEffect(() => {
     createContact()
  },[])
  if (userContacts === undefined ){
    return (
      < div >
            No se han Agregado Contactos
        </div>
    )
  }

  return (
    <div className='ListaContactos'>

    {userContacts.map((contact) =>
      { 
      return(
        <CajaContacto
            nombre = {contact.userName}
            fotoPerfil = {""}
            bloqueado = {contact.blocked} 
            CurrentUserInfo = {CurrentUserInfo}/>
      )
      }
    ) 
  }

    </div>
  )
}

export default ListaContactos