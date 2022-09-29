import './NavBarStyle.css'

import Logo from '../../Images/logoPurple.png'
import User from '../../Images/user.png'

import { Modal,Form  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';

//FUNCIONES DE FIREBASE CREADAS POR NOSOTROS
import { signOutUser } from '../../firebase'
import { ChatContext } from '../../context/ChatContext';
import { Button } from 'react-bootstrap';
import {BsFillCalendarMonthFill} from 'react-icons/bs'
import { useState } from 'react';
import {
  AiOutlineCheck
  } from "react-icons/ai"
import {MdCancel} from "react-icons/md"
export const NavegationBar = ({CurrentUser}) => {

    const [showCalendarBot,setShowCalendarBot] = useState(false)  
    const [reminderMsg,setReminderMsg] = useState("")
    const [reminderDate,setReminderDate] = useState()
    const {chat,setChat} = useContext(ChatContext)

    const openCalendarbot = () => setShowCalendarBot(true)
    const closeCalendarbot = () => setShowCalendarBot(false)
    const signOut = () =>{
        setChat(
          {
            id : undefined,
            members :  ["user1","user2"],
            messages : []
          }
        )
        signOutUser()
    }
    const onFormSubmit = (e) =>{
      e.preventDefault()
      console.log(reminderMsg)
      console.log(reminderDate)
    }
    return (
      <>
      <Navbar className='navbar-component' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='container-navbar'>
            <img src={Logo} className='imglogo' alt="Logo"/>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">


                </Nav>
                <Nav>
                <Button onClick = {openCalendarbot} >
                <BsFillCalendarMonthFill  />
                </Button>
                </Nav>
                <Nav>

                  <img src={User} className='imgUser' alt="Logo"/>
                  <span className="simpletext">{CurrentUser.email }<br></br> 
                  <p className="statusOnline" onClick={signOut}> Log Out</p> </span> 
                 
                </Nav>
            
              </Navbar.Collapse>
            </Container>
          </Navbar>
  
  <Modal className = 'modal-showBot' show= {showCalendarBot} onHide = {() => closeCalendarbot}>
        
        <Modal.Header style={{width : "fix-content"}}>
          <Modal.Title style={{display : "flex",justifyContent : "space-between",fontSize : "x-small"}}> 
            <h1>
              Write the reminder you wanna create!
            </h1>
          <Button variant = "danger" onClick= {closeCalendarbot} style={{backgroundColor : "red"}}>
              <MdCancel  style={{backgroundColor : "red"}}/>
          </Button>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{textIndent : "10%", border:"0px"}}>
          <Form onSubmit={onFormSubmit} style = {{display: "block",justifyContent : "space-between "}}>
            <input 
              className='input-reminder'
              onChange={(e) => setReminderMsg(e.target.value)} 
              value = {reminderMsg}
            />
            <Form.Control type="date" value = {reminderDate} onBeforeCreateSchedule= {(e) => {setReminderDate(e)}}/>
            <Button  variant = "success" type='submit' style={{backgroundColor : "green"}}>
              <AiOutlineCheck style={{backgroundColor : "green"}}/>
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer className= "contenedor-botones-modal-bloqueo">


        </Modal.Footer>

     </Modal>
     </>

    )
  }
  