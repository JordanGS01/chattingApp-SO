
import { useState, useEffect } from "react"

import { getDownloadUrlFromStorage, deleteMessage } from '../../../firebase'

import { DropDownOptions } from './DropDownOptions'

export const AudioMessage = ({ content, hour, sender, user, type, chatId, senderName }) => {

    const [url, setUrl] = useState('')

    const setTheDownloadUrl = async () => {
        const downloadUrl = await getDownloadUrlFromStorage(content);
        setUrl(downloadUrl);
    }

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

    useEffect(() => {
      setTheDownloadUrl();
    }, [])
    

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
                    <h3 style={{fontSize:"medium"}}>{user}</h3>
                </ div>
                
                <audio controls src={ url } />
                <p style = {{fontSize : "xx-small",textAlign : "right"}}>{hour}</p>
            </div>
        </div>
    )
}
