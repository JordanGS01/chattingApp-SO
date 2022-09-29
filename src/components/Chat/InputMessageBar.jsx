import { useForm } from '../../hooks/useForm'

import {FaMicrophone} from 'react-icons/fa'
import {BsCameraFill} from 'react-icons/bs'
import './InputMessageBar.css'
import { useContext } from "react"
import { ChatContext } from "../../context/ChatContext"
import { addMessage } from '../../firebase'

import {BiSend} from 'react-icons/bi'
import {MdFileUpload} from 'react-icons/md'
import {AudioRecorder} from '../Audio/audiorec'

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
            <button
                name='camera'
                id='camera'
                //onClick={}
                className="nes-btn is-success"
            >
                <BsCameraFill style={{backgroundColor:"#98cc44"}}/>
            </button>
            <button
                name='microphone'
                id='microphone'
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
                <BiSend style={{backgroundColor: "#98cc44" }}></BiSend>
            </button>

            <label htmlFor='audio' className="nes-btn" style={{backgroundColor:"#98cc44"}}>
                <span style={{backgroundColor:"#98cc44"}}>
                <MdFileUpload style={{backgroundColor: "#98cc44" }}></MdFileUpload>
                </span>
            </label>
            {/* <input name='audio' id='audio' type="file"></input> */}
        </form>
        <AudioRecorder user={CurrentUser?.user} chatId={chat?.id}/>
        </div>
    )
}
