import { InputMessageBar } from "./InputMessageBar"
import { Message } from "./Message"
import { useContext,useState } from "react"
import { ChatContext } from "../../context/ChatContext"

export const MessagesContainer = () => {
  
  const {chat} = useContext(ChatContext)

  return (
    <div className="nes-container is-rounded" style={{borderLeft : "0px",borderRight : "0px"}}>
      {/* <button onClick={prueba}>
        adas
      </button> */}

      <section className="message-list">
        {/* {chat.messages.map((message) =>{
          <Message user={chat.members[1]} content={message.content} sender={true}/>
        })
        } */}
        <Message user={"Jordan"} content={"Hola Leandro, Victor"} sender={true}/>
        <Message user={"Jordan"} content={"Hola Leandro, Victor"} sender={true}/>
        <Message user={"Jordan"} content={"Hola Leandro, Victor"} sender={true}/>
      </section>

      <InputMessageBar />
    </div>
  )
}
