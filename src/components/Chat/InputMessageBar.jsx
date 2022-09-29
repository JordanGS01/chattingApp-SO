import { useForm } from '../../hooks/useForm'

import './InputMessageBar.css'
import { useContext } from "react"
import { ChatContext } from "../../context/ChatContext"
import { addMessage } from '../../firebase'

import {BiSend} from 'react-icons/bi'

import { AudioRecorder } from '../Audio/audiorec'
import { ImageUpload } from './ImageUpload'

export const InputMessageBar = ({ CurrentUser }) => {
    const { formState, onInputChange, onResetForm } = useForm({
        messageContent:"",
    });
    
    const { messageContent } = formState;
    const { chat } = useContext(ChatContext)

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const d = new Date()
        const currentDate = d.getHours() + ":" + d.getMinutes()

        const newMessage = {
            content: messageContent,
            hour : currentDate,
            type : "text",
            sender : CurrentUser.user
        }
        addMessage(chat.id,newMessage)

        onResetForm();
    }
    
    return (
        <div className='InputMessageBar-Form'>
        <form className='InputMessageBar-Form' onSubmit={onFormSubmit}>

            <ImageUpload
                user = { CurrentUser?.user }
                chatId = { chat?.id }
            />

            <input 
                type="text" 
                name="messageContent"
                value={ messageContent }
                className="nes-input"
                onChange={ onInputChange }
            />

            <button 
                type="submit" 
                className="nes-btn is-success"
            >
                <BiSend style={{backgroundColor: "#98cc44" }} />
            </button>

        </form>
        <AudioRecorder user={CurrentUser?.user} chatId={chat?.id}/>
        </div>
    )
}
