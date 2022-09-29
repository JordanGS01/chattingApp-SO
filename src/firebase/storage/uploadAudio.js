
import { ref, uploadBytes } from 'firebase/storage'

import { storage, addMessage } from '../'

export const uploadAudio = async ({ audio, key }, user, chatId) => {
    try{
        //Se extrae el archivo de la dirección dada y se crea un objeto BLOB de él
        const response = await fetch(audio);
        const blobFile = await response.blob();
        const filename = key;

        //Se crean las instancias necesarias para subir la información al storage
        const storageFileDirection = `chats/${chatId}/audios/${filename}.ogg`
        const storageRef = ref(storage, storageFileDirection);

        await uploadBytes(storageRef, blobFile);
    
        const d = new Date()
        const currentDate = d.getHours() + ":" + d.getMinutes()

        const messageObject = {
            content: storageRef.fullPath,
            hour : currentDate,
            type : "audio",
            sender : user
        }

        addMessage(chatId, messageObject);

    }catch(error){
        console.log(error);
    }
}
