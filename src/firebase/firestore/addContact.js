

import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore'

import { searchUser } from '../'
import { firestore } from '../'
import { auth } from '../'


export const addContact = async ( userName ) => {

    try{
        const user = await searchUser( userName );
    
        //El usuario no existe
        if( user.length < 1 ){return null;}

        const currentUserId = auth.currentUser.uid;

        //El usuario que se intenta agregar es uno mismo
        if( user.uid === currentUserId ){return false}

        const userRef = doc(firestore, "users", currentUserId);

        const newContact = {
            blocked: false,
            userName: user[0].user,
            uid: user[0].uid
        };

        await updateDoc(userRef, {
            contacts: arrayUnion(newContact)
        });

    }catch(error){
        console.log(error);
    }

}