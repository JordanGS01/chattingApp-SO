
import { useState, useEffect } from "react"

import { getDownloadUrlFromStorage } from '../../../firebase'


export const AudioMessage = ({ content, hour, sender, user }) => {

    const [url, setUrl] = useState('')

    const setTheDownloadUrl = async () => {
        const downloadUrl = await getDownloadUrlFromStorage(content);
        setUrl(downloadUrl);
    }

    useEffect(() => {
      setTheDownloadUrl();
    }, [])
    

    return (
        <div className={`message ${!sender?"-left":"-right"}`} style = {{marginRight : sender ? 0 : "auto",marginLeft : sender ? "auto":0}}>
            <div className={`balloon ${!sender?"from-left":"from-right"}`} style ={{backgroundColor : sender ? "lightgreen":"lightcoral",marginRight : sender ? 0 : "auto"}}>
                <h3 style={{fontSize:"medium"}}>{user}</h3> 
                
                <audio controls src={ url } />
                <p style = {{fontSize : "xx-small",textAlign : "right"}}>{hour}</p>
            </div>
        </div>
    )
}
