import { useState } from 'react'
import { ChatContext } from './ChatContext'


export const  ChatProvider = ({ children })=>{
    const [chat,setChat] = useState(
        {
            id : undefined,
            members :  ["user1","user2"],
            messages : []
          }
    )
    return(
        <ChatContext.Provider value = {{chat,setChat}}>
            { children }
        </ChatContext.Provider>     
    )
    }
