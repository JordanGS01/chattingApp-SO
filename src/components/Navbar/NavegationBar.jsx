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
      <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <img src={Logo} className='imglogo' alt="Logo"/>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#Profile">Profile</Nav.Link>
                  <Nav.Link href="#Nothing"></Nav.Link>
                  <NavDropdown title="Contacts" id="collasible-nav-dropdown">
                    <NavDropdown.Item >Add Contact</NavDropdown.Item>
                    <NavDropdown.Item href="#SearchContact">
                      Search Contact
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#BlockContact">
                      Block Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#Aboutus">About Us</Nav.Link>
                  <Nav.Link eventKey={2} href="#Community">
                    Community (WIP)
                  </Nav.Link>
                  
                  <img src={User} className='imgUser' alt="Logo"/>
                  <span className="simpletext">Username <br></br> <p className="statusOnline" onClick={signOutUser}> Log Out</p> </span> 
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      
    )
  }
  