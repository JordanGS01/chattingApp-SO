
import { doc, getDoc, query, where, collection, documentId, getDocs } from 'firebase/firestore'
import { auth, firestore } from '../'

export const getActiveChats = async () => {
    const actualUserId = auth.currentUser.uid;

    //Se obtiene la referencia del usuario actual
    const userRef = doc(firestore, 'users', actualUserId);
    const userSnapshot = await getDoc(userRef);
    //Obtenemos la información del usuario y extraemos sus chats activos
    const userData = userSnapshot.data();
    const userActiveChats = userData.chats;
    if (userActiveChats.length === 0){
        return []
    }
    const chatsRef = collection(firestore, "chats");

    const q = query(chatsRef, where("id","in",userActiveChats));
    const querySnapshot = await getDocs(q);

    const userActiveChatsData = querySnapshot.docs.map( (doc) => {
        return doc.data();
    } )

    return userActiveChatsData;
}