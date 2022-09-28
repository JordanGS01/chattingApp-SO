import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore'

import { searchUser } from '..'
import { firestore } from '..'
import { auth } from '..'


export const addNewChat = async (userName,currentObject) => {

    try{
        const user = await searchUser(userName)
        const uidChat = user[0].uid + auth.currentUser.uid

        const ChatRef = doc(firestore, "chats",uidChat);
        const newChat = {
            id : uidChat,
            members : [userName,currentObject.user],
            messages: []
        }
        setDoc(ChatRef,newChat)

        const CurrentRef = doc(firestore, "users", auth.currentUser.uid );
        const contactRef = doc(firestore, "users", user[0].uid);

        await updateDoc(CurrentRef, {
            chats: arrayUnion(uidChat)
        });
        await updateDoc(contactRef, {
            chats: arrayUnion(uidChat)
        });
        setDoc(ChatRef,newChat)
        return newChat
    }catch(error){
        console.log(error);
    }

}