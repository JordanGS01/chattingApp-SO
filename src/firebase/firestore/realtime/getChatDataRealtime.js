
import { doc, onSnapshot } from "firebase/firestore";

import { firestore } from '../../'

export const getChatDataRealtime = ( chatId, setChatMessages ) => {
    try{
        const chatRef = doc(firestore, "chats", chatId);
        onSnapshot(chatRef, (chat) => {
            setChatMessages(chat.data().messages);
        });
    }catch(error){
        console.log(error);
    }
}