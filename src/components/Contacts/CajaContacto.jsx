import { useState } from "react"
import "./CajaContacto.css"

// Bootstrap
import { Dropdown,Modal,Button,Toast,ToastContainer} from 'react-bootstrap'

// Funciones Firebase

import { blockUser,unblockUser,eliminateContact} from "../../firebase"


// Iconos
import {BsFillTrashFill,BsFillChatFill,BsFillUnlockFill} from 'react-icons/bs'
import {BiBlock} from 'react-icons/bi'
import {IoInformationOutline} from 'react-icons/io5'
import {AiOutlineCheck} from 'react-icons/ai'
import {MdCancel} from 'react-icons/md'
import fotoVacia from "../../Images/EmptyProfilepicture.png"

const CajaContacto = (props) => {
  
  // UseState para usuario Bloqueado
  const [bloqueado,setBloqueo] = useState(props.bloqueado)

  const [NotificacionDesb,setNotificacionDesb] = useState(false)
  const [addedUserToast, setAddedUserToast] = useState(false)
  // Funciones para el modal de bloqueo
  const [MostrarPopUpBloqueo,setPopUpBloqueo] = useState(false)
  const cerrarPopUpBloqueo = () => setPopUpBloqueo(false)
  const abrirPopUpBloqueo = () => setPopUpBloqueo(true)
  

  const [showEliminateUser,setEliminateUser] = useState(false)

  const closeEliminateUser = () => setEliminateUser(false)
  const OpenEliminateUser = () => setEliminateUser(true)
  //Mostrar Notificación de desbloquear usuario
  const notificarDesbloqueo = () => setNotificacionDesb(!NotificacionDesb)
  const notifyEliminateUser = () => setAddedUserToast(!addedUserToast)

  const handleDelete = (e) => {
      setAddedUserToast(true)
      setEliminateUser(false)
      eliminateContact()
  }

  const bloquearUsuario = () => {
      setPopUpBloqueo(false)
      setBloqueo(true)
      blockUser(props.nombre)
  }

  const desbloquearUsuario = () => {
    notificarDesbloqueo()
    setBloqueo(false)
    unblockUser(props.nombre)
  }

  const openChat = () =>{
    console.log("Abrí el chat de " )
  }
  return (
    <>
    <div className='seleccionar-contacto' variant='light' style={{backgroundColor: bloqueado ? "	#8B0000" : "white"}}>
      <div className="form-contactos"  style={{backgroundColor: bloqueado ? "	#8B0000" : "white"}}>
            <img className="foto-perfil-chat" src={bloqueado ? fotoVacia : props.fotoPerfil ? props.fotoPerfil :fotoVacia } />
            <div className='nombre-contacto' style={{backgroundColor: bloqueado ? "	#8B0000" : "white"}}>
              {props.nombre}
            </div>
            <Dropdown className='opciones-contactos' style={{backgroundColor: bloqueado ? "	#8B0000" : "white"}}>
              <Dropdown.Toggle variant="light" >
              </Dropdown.Toggle>
              <Dropdown.Menu className='menu-opciones-contactos'>
                  <Dropdown.Item className= 'opciones-menu-contacto'> 
                      <BsFillChatFill className='icono-menu-abrirMensaje'/> 
                      Abrir Chat
                  </Dropdown.Item >
                  <Dropdown.Item className= 'opciones-menu-contacto' onClick={OpenEliminateUser}> 
                      <BsFillTrashFill className='icono-menu'/> 
                      Eliminar Contacto
                  </Dropdown.Item >
                  <Dropdown.Item className= 'opciones-menu-contacto' onClick={bloqueado ?  desbloquearUsuario : abrirPopUpBloqueo} > 
                      {bloqueado ? <BsFillUnlockFill className='icono-menu'/>: <BiBlock className='icono-menu'/> }
                      {bloqueado ?  "Desbloquear usuario": "bloquear Usuario" }
                  </Dropdown.Item>
                  <Dropdown.Item className= 'opciones-menu-contacto' > 
                      <IoInformationOutline className='icono-contacto-info'/>  
                      Informacion
                  </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </div>




      {/* Pop Up para bloquear a una persona*/}

     <Modal className = 'modal-bloqueo' show= {MostrarPopUpBloqueo} onHide = {() => cerrarPopUpBloqueo}>
        <Modal.Header>
          <Modal.Title>¿Estas seguro que quieres Bloquear a este usuario?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textIndent : "10%", border:"0px"}}>Al bloquear este usuario no podras enviarle mensajes nuevos, ni este podra responderte  </Modal.Body>
        <Modal.Footer className= "contenedor-botones-modal-bloqueo">

          <Button variant="success" style={{backgroundColor: "green" }} onClick={bloquearUsuario}>
            <AiOutlineCheck style={{backgroundColor: "green" }}/>
          </Button>
          <Button variant="danger" onClick={cerrarPopUpBloqueo} style={{backgroundColor: "red" }}>
            <MdCancel style={{backgroundColor: "red" }} />
          </Button>

        </Modal.Footer>
     </Modal>
     {/* Modal de eliminar Contacto */}
     <Modal className = 'modal-bloqueo' show= {showEliminateUser} onHide = {() => closeEliminateUser}>
        <Modal.Header>
          <Modal.Title>¿Estas seguro que quieres Eliminar a este usuario?</Modal.Title>
        </Modal.Header>
      
        <Modal.Footer className= "contenedor-botones-modal-bloqueo">

          <Button variant="success" style={{backgroundColor: "green" }} onClick={handleDelete}>
            <AiOutlineCheck style={{backgroundColor: "green" }}/>
          </Button>
          <Button variant="danger" onClick={closeEliminateUser} style={{backgroundColor: "red" }}>
            <MdCancel style={{backgroundColor: "red" }} />
          </Button>

        </Modal.Footer>
     </Modal>
    </div>
          {/* Notificación de Desbloqueo */}
          <Toast 
          className = "toast-desbloqueo"
          show= {NotificacionDesb} 
          onClose={notificarDesbloqueo}>
          <Toast.Header className= "toast-desbloqueo-header">

            <AiOutlineCheck className="check-toast"/>
            El usuario ha sido desbloqueado   

          </Toast.Header>
          
        </Toast>

        {/* Notificación de Contacto Eliminado*/}


          <Toast show= {addedUserToast} onClose= {notifyEliminateUser}>
            <Toast.Header>

              <div className="me-auto">Usuario Eliminado</div>
            </Toast.Header>
          </Toast>

    </>
  )
}

export default CajaContacto