
import {Button} from 'react-bootstrap'
import fotoVacia from "../../Images/EmptyProfilepicture.png"
import { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import  './Chat.css'
import { useState,useEffect } from 'react'
const Chat = (props) => {
  const [messages,setMessages] = useState(props.messages)
  const [lastmessage,setLastMessage] = useState(messages[messages.length - 1])
  const {chat,setChat} = useContext(ChatContext)
  const [changeCurrentChatStyle,setChangeCurrentChatStyle] = useState(false)

  const changeChatStyle= () =>{
    if (props.id === chat.id){
      setChangeCurrentChatStyle(true)
    }else{
      setChangeCurrentChatStyle(false)
    }

  }
  useEffect(() => {
    changeChatStyle()
  },[chat]) 
  const changeChat = () =>{
    const array = 
    {
      id : props.id,
      members : [props.nombre,props.CurrentUserInfo.user],
      messages : props.messages
    }
    
    setChat(array) 
  }
  return (
    <>
    <Button className='seleccionar-chat' variant='light' onClick={changeChat} style={{borderRight : changeCurrentChatStyle ? "6px solid purple" : "0px"}}>
    <div className='caja-chat' >
        <img className="foto-perfil-chat" src={props.fotoPerfil ? props.fotoPerfil : fotoVacia} />
        <div className='contenedor-texto'>
          <div className='contenedor-nombre-fecha'>
          <div className = 'texto-nombre'>
             {props.nombre} :   
            </div>
            <a className='texto-fecha'>
              {lastmessage ? lastmessage.hour : ""}  
            </a>
            </div>
            <div className='texto-cuerpo' style={{color : lastmessage ? "black" : "gray"}}>
              {lastmessage ? lastmessage.content  : "No hay mensajes con este usuario"}
            </div>
        </div>
      </div>
  
    </Button>
    </>
  )
}

export default Chat
