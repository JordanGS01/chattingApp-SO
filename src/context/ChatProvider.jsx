import { useState } from 'react'
import { ChatContext } from './ChatContext'



export const  ChatProvider = ({ children })=>{
    const [chat,setChat] = useState(
        {
            id : "",
            members :  ["receiver","sender"],
            messages : []
          }
    )
    return(
        <ChatContext.Provider value = {{chat,setChat}}>
            { children }
        </ChatContext.Provider>     
    )
    }
