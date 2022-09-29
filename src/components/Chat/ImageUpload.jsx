
import {MdFileUpload} from 'react-icons/md'

import { useState } from "react"

// import { useForm } from '../../hooks/useForm'

// export const ImageUpload = () => {
    
//     const { formState, onInputChange, onResetForm } = useForm({
//         image:"",
//     });

//     const { image } = formState;

//     const onSubmitForm = (e) => {
//         e.preventDefault();
//         console.log(image);
//     }

//     return (
//     <form onSubmit={ onSubmitForm }>
//         <img src={ image } alt=""/>

//         <label 
//             htmlFor="image" 
//             className='InputMessageBar-Label nes-btn is-success'
//         >
//             <input 
//                 type="file"
//                 id='image'
//                 name='image'
//                 value={ image }
//                 className='nes-btn is-success' 
//                 onChange={ onInputChange }
//                 style={{ backgroundColor: "#98cc44" }}
//             />
//         </label>
        
//         <button 
//             type="submit" 
//             className="nes-btn is-success"
//         >
//             <MdFileUpload style={{backgroundColor: "#98cc44" }} />
//         </button>

//     </form>
//   )
// }


import { uploadImage } from '../../firebase'

export const ImageUpload = ({ user, chatId }) => {

    const [imageU, setImageU] = useState(false);

    const uploadImg = () => {
        if(imageU === false) { return; }
        uploadImage( imageU, user, chatId );
    }

    return (
        <div className='d-flex'>
            <label 
                htmlFor="image" 
                className='InputMessageBar-Label nes-btn is-success'
            >
                <input name='image' id='image' type="file" onChange={ (e)=>{ setImageU(e.target.files[0]) } }/>
                <MdFileUpload style={{backgroundColor: "#98cc44" }} />
            </label>
            {
                imageU?
                <button 
                    onClick={ uploadImg }
                    className='nes-btn is-success '
                >
                    <small>
                        Upload
                    </small>
                </button>
                :
                <></>
            }
        </div>
      )
}
