import './NavBarStyle.css'

import Logo from '../../Images/logoPurple.png'
import User from '../../Images/user.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';

//FUNCIONES DE FIREBASE CREADAS POR NOSOTROS
import { signOutUser } from '../../firebase'
import { ChatContext } from '../../context/ChatContext';

export const NavegationBar = ({CurrentUser}) => {
    const {chat,setChat} = useContext(ChatContext)
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
    return (

      <Navbar className='navbar-component' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='container-navbar'>
            <img src={Logo} className='imglogo' alt="Logo"/>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">


                </Nav>
                <Nav>

                  <img src={User} className='imgUser' alt="Logo"/>
                  <span className="simpletext">{CurrentUser.email }<br></br> 
                  <p className="statusOnline" onClick={signOut}> Log Out</p> </span> 
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    )
  }
  