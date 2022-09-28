import { useForm } from '../../hooks/useForm'

import {FaMicrophone} from 'react-icons/fa'
import {BsCameraFill} from 'react-icons/bs'
import './InputMessageBar.css'
import { useContext ,useRef} from "react"
import { ChatContext } from "../../context/ChatContext"
import { addMessage } from '../../firebase'


export const InputMessageBar = ({CurrentUser}) => {
    const { formState, onInputChange, onResetForm } = useForm({
        messageContent:"",
    });
    
    const { messageContent } = formState;
    const {chat} = useContext(ChatContext)
    const dummy = useRef()
    const onFormSubmit = (e) => {
        e.preventDefault();
        //ACA SE REALIZA ALGUNA ACCION CON EL INPUT
        const d = new Date()
        const currentDate = d.getHours() + ":" + d.getMinutes()
        dummy.current.scrollIntoView({ behavior: 'smooth' })
        const newMessage = {
            content: messageContent,
            hour : currentDate,
            type : "text",
            sender : CurrentUser.user
        }
        addMessage(chat.id,newMessage)
        dummy.current.scrollIntoView({ behavior: 'smooth' })
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
        <div ref={dummy}>

        </div>

        </form>
    )
}
