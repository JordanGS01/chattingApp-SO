import { useForm } from '../../hooks/useForm'
import './InputMessageBar.css'
import {BiSend,BiMicrophone} from 'react-icons/bi'
import {MdFileUpload} from 'react-icons/md'
import {AudioRecorder} from '../Audio/audiorec'

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
                <BiSend style={{backgroundColor: "#98cc44" }}></BiSend>
            </button>
            <label class="nes-btn" style={{backgroundColor:"#98cc44"}}>
            <span style={{backgroundColor:"#98cc44"}}>
            <MdFileUpload style={{backgroundColor: "#98cc44" }}></MdFileUpload>
            </span>
            <input type="file"></input>
            </label>
            <div>
            <AudioRecorder></AudioRecorder>
            </div>
        </form>
    )
}
