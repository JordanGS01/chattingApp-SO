

import { Dropdown } from 'react-bootstrap'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export const DropDownOptions = ({ onModificarMensaje, onEliminarMensaje, modifyAccesable }) => {
    
  return (
    <Dropdown className='opciones-contactos'>
        <Dropdown.Toggle variant="success Dropdown-width" >
        </Dropdown.Toggle>
        <Dropdown.Menu className='menu-opciones-contactos'>
            {
                modifyAccesable ?
                <Dropdown.Item className= 'opciones-menu-contacto' onClick={onModificarMensaje}> 
                    <BsFillPencilFill className='icono-menu-abrirMensaje'/> 
                    Modificar mensaje
                </Dropdown.Item >
                :
                <></>
            }
            
            <Dropdown.Item className= 'opciones-menu-contacto' onClick={onEliminarMensaje}> 
                <BsFillTrashFill className='icono-menu'/> 
                Eliminar mensaje
            </Dropdown.Item >
        </Dropdown.Menu>
    </Dropdown>
  )

}
