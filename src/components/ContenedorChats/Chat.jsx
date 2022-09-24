
import {Button} from 'react-bootstrap'
import fotoVacia from "../../Images/EmptyProfilepicture.png"

import  './Chat.css'
const chat = (props) => {
  return (
    <>

    <Button className='seleccionar-chat' variant='light'>
    <div className='caja-chat'>
        <img className="foto-perfil-chat" src={props.fotoPerfil ? props.fotoPerfil : fotoVacia} />
        <div className='contenedor-texto'>
          <div className='contenedor-nombre-fecha'>
          <div className = 'texto-nombre'>
             {props.nombre} :   
            </div>
            <a className='texto-fecha'>
              {props.hora}  
            </a>
            </div>
            <div className='texto-cuerpo'>
              {props.cuerpoMensaje}
            </div>
        </div>
      </div>
  
    </Button>
    </>
  )
}

export default chat
