

import "./Message.css"
import { AudioMessage } from './MessagesContainers/AudioMessage'
import { ImagesMessage } from "./MessagesContainers/ImagesMessage"
import { TextMessage } from './MessagesContainers/TextMessage'


export const Messages = ({ type, user, content, sender, hour, chatId, senderName }) => {

  if( type === 'text' ){
    return (
      <TextMessage 
        user={user}
        content={content}
        sender={sender}
        hour={hour}
        type={type}
        chatId={chatId}
        senderName={senderName}
      />
    )
  }
  else if ( type === 'audio' ){
    return(
      <AudioMessage
        user={user}
        content={content}
        sender={sender}
        hour={hour}
        type={type}
        chatId={chatId}
        senderName={senderName}
      />
    )
  }
  else if ( type === 'image' ){
    return(
      <ImagesMessage 
        user={user}
        content={content}
        sender={sender}
        hour={hour}
        type={type}
        chatId={chatId}
      />
    )
  }
  else if ( type === 'video' ){
    return(
      <ImagesMessage 
        user={user}
        content={content}
        sender={sender}
        hour={hour}
        type={type}
        chatId={chatId}
      />
    )
  }
  else{
    return <>No funcó</>
  }
}
