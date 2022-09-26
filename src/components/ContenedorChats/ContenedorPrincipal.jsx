import Busqueda from './Busqueda'
import { Routes, Route } from "react-router-dom";
import './ContenedorPrincipal.css'
import ListaChats from './ListaChats';
import ListaContactos from '../Contacts/ListaContactos';

const ContenedorPrincipal = () => {

  

  return (
    <div className='caja-chats'>
  
      <div className='contenedor-busqueda'>
        <Busqueda/>
      </div>
      
    {/* Contenedor para los Chats */}
      <div className='contenedor-mensajes'>
        <Routes>
          <Route path='/' element = {<ListaChats/>}/>
          <Route path='/Contacts' element = {<ListaContactos/>}/>
        </Routes>
      </div>
    </div>
  )
}
    
export default ContenedorPrincipal;