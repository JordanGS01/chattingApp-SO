import { InputMessageBar } from "./InputMessageBar"
import { Message } from "./Message"
import { useContext,useState,useEffect } from "react"
import { ChatContext } from "../../context/ChatContext"

import { getCurrentUser } from '../../firebase'

import { getChatDataRealtime } from '../../firebase'
import "./MessagesContainer.css"
export const MessagesContainer = () => {

  const { chat } = useContext(ChatContext)
  const [chatMessages, setChatMessages] = useState(chat.messages?chat.messages:{});

  const [currentUser,setCurrentUser] = useState()

  let sender = ""

  const userIsBlocked = () =>{
    
  }
  const declareData = async() =>{
    const currentUserData = await getCurrentUser()
    setCurrentUser(currentUserData)
  }
  
  const senderOrReceiver = (object) =>{
    if (chat.members[0] === object.sender){
      sender = chat.members[0]
      return false

    } else{ 
      sender = object.sender
      return true
    }
  }
  
  const returnSenderName = (object) => {
    if (chat.members[0] === object.sender){
      sender = chat.members[0]
      return sender

    } else{ 
      sender = object.sender
      return sender
    }
  }

  useEffect (() => {
      declareData()
      getChatDataRealtime(chat.id,setChatMessages);

    },[chat])
  
  if(chat.id === undefined){return
  <>
  </>
  }
  
  return (

    <div className="nes-container is-rounded" style={{borderLeft : "0px",borderRight : "0px"}}>
      <section className="message-list" >
        {chatMessages.map((message) =>{
          return (<Message user={returnSenderName(message)}
           content={message.content} 
           sender={senderOrReceiver(message)}
           hour = {message.hour}/>)
        }) 
        } 
      </section>
      <InputMessageBar CurrentUser = {currentUser} />
    </div>
  )
}
