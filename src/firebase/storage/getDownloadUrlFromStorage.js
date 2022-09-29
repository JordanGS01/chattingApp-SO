import { ref, getDownloadURL } from "firebase/storage";

import { storage } from '../'

export const getDownloadUrlFromStorage = async(src) => {
    
    try{
        const documentRef = ref(storage, src);
        const url = await getDownloadURL(documentRef);
        return url;
    }catch(error){
        console.log(error);
    }

}

