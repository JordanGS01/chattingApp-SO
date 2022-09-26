
import CajaContacto from './CajaContacto'
import { useState,useEffect } from 'react'
import { IterateContacts,getCurrentUserName } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'


const ListaContactos = () => {

  const [userContacts,setUserContacts] = useState(undefined)

  const createContact = async() =>{
    const CurrentUserName = await getCurrentUserName()
    const contactos = await IterateContacts(CurrentUserName)
    console.log(contactos)
    if(contactos.length > 0){
      setUserContacts(contactos)
    }else{
      setUserContacts(undefined)
    }
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