import { doc, updateDoc, arrayUnion } from 'firebase/firestore'

import { firestore } from '..'



export const addMessage = async (chatId,MessageObject) => {
    try{
        const chatRef = doc(firestore,"chats",chatId)

        await updateDoc(chatRef,{
            messages : arrayUnion(MessageObject)
        } )
    }catch(error){
        console.log(error)
    }


}   