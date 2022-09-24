import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './auth'


export const signUpUser = async (email, password) => {
    try{
        const userCretential = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = userCretential;
        console.log( user );
    }catch (error) {
        console.log( error );
    }
}