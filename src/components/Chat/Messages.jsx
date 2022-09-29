

import "./Message.css"
import { AudioMessage } from './MessagesContainers/AudioMessage'
import { ImagesMessage } from "./MessagesContainers/ImagesMessage"
import { TextMessage } from './MessagesContainers/TextMessage'


export const Messages = ({ type, user, content, sender, hour }) => {

  if( type === 'text' ){
    return (
      <TextMessage 
        user={user}
        content={content}
        sender={sender}
        hour={hour}
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
      />
    )
  }
  else{
    return <>No funcó</>
  }
}
