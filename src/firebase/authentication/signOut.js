
import { signOut } from 'firebase/auth'

import { auth } from '../'


export const signOutUser = async () => {
    try{
        signOut(auth);
    }catch( error ){
        console.log(error);
    }
}