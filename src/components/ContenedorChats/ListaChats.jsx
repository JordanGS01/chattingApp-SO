
import Chat from './Chat'

// Imagenes de prueba
import src from "./Bulbasaur.png"
import src1 from "./charmander.png"
import src2 from "./squirtle.png"

import { useEffect } from 'react'

<<<<<<< HEAD
        {/* <Chat nombre = {"Jordan"} 
        cuerpoMensaje = {"Hola, soy Jordan Hola"}
         hora = {"20:08"}
         fotoPerfil = {src}/>
     */}


      </div>
=======
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
>>>>>>> 857b5417da8731cfb3c40fe0268c72bb857f16d5
  )
}

export default ListaChats