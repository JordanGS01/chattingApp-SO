
import CajaContacto from './CajaContacto'

// Imagenes de prueba
import src from "../../FotosPerfil/Bulbasaur.png"
import src1 from "../../FotosPerfil/Bulbasaur.png"
import src2 from "../../FotosPerfil/Bulbasaur.png"

const ListaContactos = () => {
  return (
    <div className='ListaContactos'>
      
        <CajaContacto
         nombre = {"Jordan"}
         fotoPerfil = {src}
         bloqueado = {false} />

        <CajaContacto 
        nombre = {"Leandro"} 
        fotoPerfil = {src1}
        bloqueado = {true}/>

        <CajaContacto
         nombre = {"Victor"} 
         fotoPerfil = {src2}
         bloqueado = {false}/>

        <CajaContacto
         nombre = {"Usuario sin foto"} 
         bloqueado = {true}/>

    </div>
  )
}

export default ListaContactos