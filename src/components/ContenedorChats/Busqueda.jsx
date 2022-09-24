
import {Form,Button} from 'react-bootstrap/';  
import { Link } from 'react-router-dom';
import {
  AiOutlineContacts,
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlinePlusCircle} from "react-icons/ai"
import "./Busqueda.css"
const Busqueda = () => {

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

            
            <Button className = 'boton-mas'
            variant='light'>
                  <AiOutlinePlusCircle /> 
            </Button>   
            <Link to="/Contacts" className='link-Contactos'>
            <Button className= 'boton-Contactos'
            variant='light'>
                  <AiOutlineContacts/>
            </Button>
            </Link>
          </Form>

    </div>
  )
}

export default Busqueda