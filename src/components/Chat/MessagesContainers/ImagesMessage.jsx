

import { useEffect, useState } from 'react'

import { getDownloadUrlFromStorage } from '../../../firebase'

export const ImagesMessage = ({ type, user, content, sender, hour }) => {

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
            
          {
            type==='image'?
            <img className="Messages-IMG" src={url} alt="" />
            :
            <video width="320" height="240" controls autoPlay>
                <source src={url} type="video/mp4" />
                <source src={url} type="video/ogg" />
            </video>
          }

          <p style = {{fontSize : "xx-small",textAlign : "right"}}>{hour}</p>
        </div>
      </div>
    )
  }
  