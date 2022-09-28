import { InputMessageBar } from "./InputMessageBar"
import { Message } from "./Message"
import { useContext,useState,useEffect } from "react"
import { ChatContext } from "../../context/ChatContext"
import {getCurrentUser} from '../../firebase'
export const MessagesContainer = () => {
  
  const {chat} = useContext(ChatContext)
  let sender = ""
  const [currentUser,setCurrentUser   ] = useState()
  const declareData = async() =>{
    const currentUserData = await getCurrentUser()
    setCurrentUser(currentUserData)
  }
  useEffect (
    () => {
      declareData()
    },[]
  )
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
  return (
    
    <div className="nes-container is-rounded" style={{borderLeft : "0px",borderRight : "0px"}}>
      <button onClick={senderOrReceiver}>
          dasdas
      </button>
      <section className="message-list" >
        {chat.messages.map((message) =>{
          return (<Message user={returnSenderName(message)} content={message.content} sender={senderOrReceiver(message)}/>)
        })
        }
      </section>

      <InputMessageBar CurrentUser = {currentUser}/>
    </div>
  )
}
