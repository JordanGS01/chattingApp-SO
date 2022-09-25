

import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore'

import { searchUser } from '..'
import { firestore } from '..'
import { auth } from '..'


export const IterateContacts = async ( userName ) => {

    try{
    
        const user = await searchUser(userName)
        const contacts = user[0].contacts
        return contacts
    }catch(error){
        console.log(error);
    }

}