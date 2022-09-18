import { useForm } from '../../hooks/useForm'
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
