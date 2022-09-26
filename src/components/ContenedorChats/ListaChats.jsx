
import Chat from './Chat'

// Imagenes de prueba
import src from "./Bulbasaur.png"
import src1 from "./charmander.png"
import src2 from "./squirtle.png"

import { useEffect } from 'react'

import { getActiveChats } from '../../firebase'

const ListaChats = () => {
        useEffect(() => {
          getActiveChats();
        }, [])
        
  return (
    <div className='ListaChats'>
        <Chat   nombre = {"Jordan"} 
                cuerpoMensaje = {"Hola, soy Jordan Hola"}
                hora = {"20:08"}
                fotoPerfil = {src}/>
    </div>
  )
}

export default ListaChats