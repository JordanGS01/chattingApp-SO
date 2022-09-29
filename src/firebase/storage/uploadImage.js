
import { ref, uploadBytes } from 'firebase/storage'

import { storage, addMessage } from '../'

export const uploadImage = async ( image, user, chatId ) => {
    try{
        //Se extrae el archivo de la dirección dada y se crea un objeto BLOB de él
        const filename = image.name;
        
        let storageFileDirection
        let type
        if(image.type === 'video/mp4'){
            storageFileDirection = `chats/${chatId}/videos/${filename}`
            type = 'video'
        }else{
            storageFileDirection = `chats/${chatId}/images/${filename}`
            type = 'image'
        }
        const storageRef = ref(storage, storageFileDirection);

        await uploadBytes( storageRef, image );
    
        const d = new Date()
        const currentDate = d.getHours() + ":" + d.getMinutes()

        const messageObject = {
            content: storageRef.fullPath,
            hour : currentDate,
            type : type,
            sender : user
        }

        addMessage(chatId, messageObject);

    }catch(error){
        console.log(error);
    }
}
