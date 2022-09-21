import React from 'react'
import {Form,Button} from 'react-bootstrap/';  

import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {FcContacts} from "react-icons/fc"
import "./Busqueda.css"
const Busqueda = () => {

  return (
    <div className='contenedor-barra-busqueda'>
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Contacto"
              className="me-2"
              aria-label="Search"
            />
            <Button className='boton-busqueda' variant='light'>  
            
              <AiOutlineSearch />
            </Button >

            
            <Button className = 'boton-mas'
            variant='light'>
                  <AiOutlineMessage   />  {/* <AddIcon/> */}
            </Button>   
            <Button className= 'boton-Contactos'
            variant='light'>
                   <FcContacts/>
            </Button>

          </Form>

    </div>
  )
}

export default Busqueda