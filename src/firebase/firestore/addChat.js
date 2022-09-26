import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore'

import { searchUser } from '../'
import { firestore } from '../'
import { auth } from '../'


export const addChat = async ( userName,currentUserName ) => {

    try{
        const currentUser = await searchUser(currentUserName)


    }catch(error){
        console.log(error);
    }

}