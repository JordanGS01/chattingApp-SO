import React from 'react'
import {Button,Form, FormControl} from 'react-bootstrap'
import src from "./Bulbasaur.png"

import  './Chat.css'
const chat = () => {
  return (
    <>
    <Button className='seleccionar-chat' variant='light'>
    <div className='caja-chat'>
      <Form className="d-flex">
        <img className="foto-perfil-chat" src={src} />
        <div className='contenedor-texto'>
          <div className='contenedor-nombre-fecha'>
          <h6 className = 'texto-nombre'>
             Victor:   
            </h6>
            <a className='texto-fecha'>
              23:04   
            </a>
            </div>
            <p className='texto-cuerpo'>
              Hola, Mi nombre es victor



            </p>
           
        </div>
      </Form>
      </div>
    </Button>
    </>
  )
}

export default chat
