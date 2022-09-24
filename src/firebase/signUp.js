import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './auth'


export const signUpUser = async (email, password) => {
    try{
        const userCretential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCretential);
    }catch (error) {
        console.log( error );
    }
}