
import Chat from './Chat'

// Imagenes de prueba
import src from "../../FotosPerfil/Bulbasaur.png"
import src1 from "../../FotosPerfil/charmander.png"
import src2 from "../../FotosPerfil/squirtle.png"

const ListaChats = () => {
  return (
    <div className='ListaChats'>

        <Chat nombre = {"Jordan"} 
        cuerpoMensaje = {"Hola, soy Jordan Hola"}
         hora = {"20:08"}
         fotoPerfil = {src}/>

        <Chat 
        nombre = {"Leandro"} 
        cuerpoMensaje = {"Hola, soy Leandro asdasdwqdqwdnqw idqydqwudhudwqydwdhdhuqwhd"} 
        hora = {"19:08"}
        fotoPerfil = {src1}/>
        
        <Chat nombre = {"Victor"} 
        cuerpoMensaje = {"Hola, soy Victor"} 
        hora = {"9:08"}
        fotoPerfil = {src2}/>

        <Chat nombre = {"Usuario Sin foto de perfil"} 
        cuerpoMensaje = {"Este es un usuario sin foto de perfil"} 
        hora = {"12:08"}
        bloqueado = {true}
        />

    </div>
  )
}

export default ListaChats