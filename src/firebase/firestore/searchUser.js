

import { collection, getDocs, query, 
         where } from 'firebase/firestore'

import { firestore } from '../'


export const searchUser = async ( userName ) => {

    try{
        const usersRef = collection( firestore, "users");

        const q = query(usersRef, where ("user", "==", userName));
        const querySnapshot = await getDocs(q);
        
        const data = querySnapshot.docs.map((doc) => {
            return ({
                ...doc.data(),
                uid:doc.id
            });
        })
        
        return data;
    }catch(error){
        console.log(error);
    }

}