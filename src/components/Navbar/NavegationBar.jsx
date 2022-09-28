import './NavBarStyle.css'

import Logo from '../../Images/logoPurple.png'
import User from '../../Images/user.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//FUNCIONES DE FIREBASE CREADAS POR NOSOTROS
import { signOutUser } from '../../firebase'

export const NavegationBar = () => {
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
                  <span className="simpletext">Username <br></br> <p className="statusOnline" onClick={signOutUser}> Log Out</p> </span> 
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    )
  }
  