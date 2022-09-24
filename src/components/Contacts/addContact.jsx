import { Container } from "react-bootstrap"
import Contacts from "./Contacts.css"
import User from '../../Images/user.png'
import Form from 'react-bootstrap/Form';



function addContactbyFC(){
    return null
}

function addContactClick(){
    return null
}

export const AddContact = (props) => {
    return(   
    <div className="nes-container is-rounded">
        <div className="contact_menu">
            <div className="nes-container is-rounded" >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Friend Code:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Friend Code" />
                    <Form.Text className="text-muted">
                    Insert the code of another user to add your friend. Remember do not share a code with another unknown person.
                    </Form.Text>
                    </Form.Group>
                        <button type="button" class="nes-btn is-success">+Add</button>
                    
                
            </div>
        </div>
        <br></br>
        
            <div className="nes-container is-rounded">
                <div className="contact_div">
                <div><img src={User} className='contact_img' alt="profile_img"/></div>
                    {props.Username}<br></br>
                    <button type="button" class="nes-btn is-primary">+Add</button>
                
                
                
                </div>
                
                    <div></div>
            </div>
            <br>
            
            </br>
                    <div className="nes-container is-rounded">
                <div className="contact_div">
                <div><img src={User} className='contact_img' alt="profile_img"/></div>
                    {props.Username2}<br></br>
                    <button type="button" class="nes-btn is-primary">+Add</button>
                
                
                
                </div>
                
                    <div></div>
          

        </div>
 

    </div>
    )
 
}