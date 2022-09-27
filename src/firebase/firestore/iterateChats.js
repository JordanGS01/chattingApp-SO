

import { searchUser } from '..'



export const IterateChats = async ( userName ) => {

    try{
    
        const user = await searchUser(userName)
        if (user){
            const chats = user[0].chats
            return chats
        }else{
            return undefined
        }
    }catch(error){
        console.log(error);
    }

}