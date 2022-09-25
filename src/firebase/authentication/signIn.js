

import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../'


export const signInUser = async ( email, password ) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
    }
}