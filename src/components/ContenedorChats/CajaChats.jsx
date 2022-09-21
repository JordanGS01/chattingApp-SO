import React from 'react'
import  Chat from './Chat'
  import Busqueda from './Busqueda'
import './cajaChats.css'

const cajaChats = () => {

  return (
    <div className='caja-chats'>
  
      <div className='contenedor-busqueda'>
        <Busqueda/>
      </div>

    {/* Contenedor para los Chats */}
    <div className='contenedor-mensajes'>
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 

          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          <Chat/> 
          
    </div>
    </div>
  )
}
    
export default cajaChats;