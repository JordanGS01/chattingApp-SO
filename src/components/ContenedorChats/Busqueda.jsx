import { useState } from 'react';

import {Form,Button,Modal} from 'react-bootstrap/';  
import { Link } from 'react-router-dom';

//ICONOS
import {
  AiOutlineContacts,
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineCheck
  } from "react-icons/ai"
import {MdCancel} from "react-icons/md"

import "./Busqueda.css"

import { addContact } from '../../firebase'


const Busqueda = () => {

  const [contactName,setContactName] = useState("")
  // Funciones para Modal de añadir contacto
  const [showAddContact,setAddContact] = useState(false)


  const closeAddContact = () => setAddContact(false)
  const openAddContact = () => setAddContact(true)

  const onFormSubmit = (e) => {
      e.preventDefault();
      addContact(contactName) ;
  }

  return (
    <div className='contenedor-barra-busqueda'>
      <Form className="d-flex">
        <Link to = '/'>
          <Button variant='light' className='boton-atras-busqueda'> 
            <AiOutlineArrowLeft/>
          </Button>
        </Link>
        <Form.Control
          type="search"
          placeholder="Buscar Contacto"
          className="me-2"
          aria-label="Search"
        />
        <Button className='boton-busqueda' variant='light'>  
          <AiOutlineSearch />
        </Button >

        
        <Button 
          className='boton-mas'
          variant='light' 
          onClick={openAddContact}
        >
          <AiOutlinePlusCircle /> 
        </Button>   

        <Link to="/Contacts" className='link-Contactos'>
          <Button 
            className='boton-Contactos'
            variant='light'
          >
            <AiOutlineContacts/>
          </Button>
        </Link>
      </Form>
{/* Modal Para bloquear usuario */}
      <Modal className = 'modal-addContact' show= {showAddContact} onHide = {() => closeAddContact}>
        
        <Modal.Header>
          <Modal.Title > Add User </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{textIndent : "10%", border:"0px"}}>
          <Form onSubmit={onFormSubmit} className= "modal-addContact-form">
            <input 
              onChange={(e) => setContactName(e.target.value)} 
              value = {contactName}
            />

            <Button className='submitContactButton' variant = "success" type='submit'  style={{backgroundColor : "green"}}>
              <AiOutlineCheck style={{backgroundColor : "green"}}/>
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer className= "contenedor-botones-modal-bloqueo">


          <Button variant = "danger" onClick= {closeAddContact} style={{backgroundColor : "red"}}>
              <MdCancel  style={{backgroundColor : "red"}}/>
          </Button>

        </Modal.Footer>

     </Modal>
   
    </div>
  )
}

export default Busqueda