import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore'

import { searchUser } from '..'
import { firestore } from '..'
import { auth } from '..'


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