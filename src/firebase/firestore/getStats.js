
import { doc, getDoc, query, where, collection, documentId, getDocs } from 'firebase/firestore'
import { auth, firestore } from '../'

export const getStats = async (userName) => {

    const chatsRef = collection(firestore, "chats");
    const querySnapshot = await getDocs(chatsRef);
    const data = querySnapshot.data
    let len = 0
    data.map((chat) =>{
        if(chat.members.includes(userName)){
            len = len + chat.messages.length 
        }
    })
    return len;
}