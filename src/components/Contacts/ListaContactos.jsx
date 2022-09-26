
import CajaContacto from './CajaContacto'
import { useState,useEffect } from 'react'
import { IterateContacts,getCurrentUserName } from '../../firebase'



const ListaContactos = ({Contacts,CurrentUserInfo}) => {

  const [userContacts,setUserContacts] = useState([])
  
  const createContact = async() =>{
<<<<<<< HEAD
    setUserContacts(Contacts)
=======
    const CurrentUserName = await getCurrentUserName()
    const contactos = await IterateContacts(CurrentUserName)

    if(contactos.length > 0){
      setUserContacts(contactos)
    }else{
      setUserContacts(undefined)
    }
>>>>>>> 857b5417da8731cfb3c40fe0268c72bb857f16d5
  }
  useEffect(() => {
     createContact()
  },[])
  if (userContacts === undefined ){
    return (
      < div>
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
            bloqueado = {contact.blocked} />
      )
      }
    ) 
  }

    </div>
  )
}

export default ListaContactos