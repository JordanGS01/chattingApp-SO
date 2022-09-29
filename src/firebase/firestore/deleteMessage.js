

import { doc, updateDoc, arrayRemove } from 'firebase/firestore'

import { firestore } from '../'


export const deleteMessage = async ( chatId, messageObject ) => {
    
    try{
        console.log(messageObject)
        const docRef = doc(firestore, "chats", chatId);

        // Atomically remove a region from the "regions" array field.
        await updateDoc(docRef, {
            messages: arrayRemove(messageObject)
        });
    } catch(error) {
        console.log(error);
    }

}