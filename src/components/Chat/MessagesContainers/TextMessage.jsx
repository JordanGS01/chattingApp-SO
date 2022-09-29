
import { DropDownOptions } from './DropDownOptions'

import { deleteMessage } from '../../../firebase'

export const TextMessage = ({ user, content, sender, hour, type, chatId, senderName }) => {
  
  const onModificarMessage = () => {
    
  }

  const onDeleteMessage = () => {

    const messageObject = {
      content,
      hour,
      sender: senderName,
      type
    }

    deleteMessage( chatId, messageObject );

  }

  return (
    <div className={`message ${!sender?"-left":"-right"}`} style = {{marginRight : sender ? 0 : "auto",marginLeft : sender ? "auto":0}}>
      <div className={`balloon ${!sender?"from-left":"from-right"}`} style ={{backgroundColor : sender ? "lightgreen":"lightcoral",marginRight : sender ? 0 : "auto"}}>
        
        <div className='d-flex justify-content-between m-2'>
          {
            sender?
            <DropDownOptions
              onModificarMensaje = {onModificarMessage}
              onEliminarMensaje = {onDeleteMessage}
              modifyAccesable = {true}
            />
            :
            <></>
          }
          <h3 style={{fontSize:"medium"}} className="m-1">{user}</h3> 
        </div>
          
        <p style={{fontSize : "x-small"}}>{content}</p>
        <p style = {{fontSize : "xx-small",textAlign : "right"}}>{hour}</p>
      </div>
    </div>
  )
}
