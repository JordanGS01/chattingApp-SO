import { doc, updateDoc, arrayUnion } from 'firebase/firestore'

import { firestore } from '..'



export const addMessage = async (chatId,messageObject) => {
    try{
        const chatRef = doc(firestore,"chats",chatId)

        await updateDoc(chatRef,{
            messages : arrayUnion(messageObject)
        } )
    }catch(error){
        console.log(error)
    }


}   