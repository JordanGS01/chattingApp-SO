
import { doc, setDoc } from 'firebase/firestore'

import { firestore } from '../'


export const registerNewUserInCollection = async (uid, userObject) => {
    try{
        const docRef = doc(firestore, "users", uid);
        await setDoc(docRef, userObject);

    }catch(error){
        console.log(error);
    }
}