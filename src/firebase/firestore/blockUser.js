import { doc, updateDoc, getDoc } from 'firebase/firestore'

import { firestore } from '../'
import { auth } from '../'


export const blockUser = async ( userName ) => {

    try{
        
        const currentUserId = auth.currentUser.uid;
        
        const userRef = doc(firestore, "users", currentUserId);
        
        const userSnapshot =await getDoc(userRef)
        const userData = userSnapshot.data()
        
        const ContactsArray = userData.contacts.map((contact) =>{
            if (contact.userName === userName){
                return {
                    ...contact,
                    blocked : true
                }
            }
                else
                {
                    return contact
                }
            }
        )
        console.log(ContactsArray)

        
        await updateDoc(userRef, {
            contacts: ContactsArray
        });

    }catch(error){
        console.log(error);
    }

}