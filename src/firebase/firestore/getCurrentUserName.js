import { doc, getDoc } from 'firebase/firestore'

import { firestore } from '..'
import { auth } from '..'

export const getCurrentUserName = async() =>{
    try{
        const currentUserId = auth.currentUser.uid;
        const userRef = doc(firestore, "users", currentUserId);
        
        const userSnapshot = await getDoc(userRef)
        const userData = userSnapshot.data()
        const currentUserName = userData.user
        return currentUserName
    }catch(error){
        console.log(error)
    }
}