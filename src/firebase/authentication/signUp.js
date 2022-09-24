import { createUserWithEmailAndPassword } from 'firebase/auth'
import { registerNewUserInCollection } from '../';

import { auth } from '../'


export const signUpUser = async (userObject, password) => {
    try{
        const { email } = userObject;
        const userCretential = await createUserWithEmailAndPassword(auth, email, password);
        
        const { uid } = userCretential.user;
        registerNewUserInCollection( uid, userObject );
        
    }catch (error) {
        console.log( error );
    }
}