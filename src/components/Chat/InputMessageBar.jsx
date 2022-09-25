import { useForm } from '../../hooks/useForm'

import {FaMicrophone} from 'react-icons/fa'
import {BsCameraFill} from 'react-icons/bs'
import './InputMessageBar.css'


export const InputMessageBar = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        messageContent:"",
    });
    
    const { messageContent } = formState;

    const onFormSubmit = (e) => {
        e.preventDefault();
        //ACA SE REALIZA ALGUNA ACCION CON EL INPUT
        onResetForm();
    }
    
    return (
        <form className='InputMessageBar-Form' onSubmit={onFormSubmit}>
            <button 
                type="submit" 
                className="nes-btn is-success"
            >
                <BsCameraFill style={{backgroundColor:"#98cc44"}}/>
            </button>
            <button 
                type="submit" 
                className="nes-btn is-success"
            >
                <FaMicrophone style={{backgroundColor:"#98cc44"}}/>
            </button>

            <input 
                type="text" 
                name="messageContent"
                value={messageContent}
                className="nes-input"
                onChange={onInputChange}
            />
            <button 
                type="submit" 
                className="nes-btn is-success"
            >
                Enviar
            </button>


        </form>
    )
}
