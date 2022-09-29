

import "./Message.css"
import { AudioMessage } from './AudioMessage'
import { TextMessage } from './TextMessage'


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
  else{
    return <>No funcó</>
  }
}
