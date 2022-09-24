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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <img src={Logo} class='imglogo' alt="Logo"/>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#Profile">Profile</Nav.Link>
                  <Nav.Link href="#Nothing"></Nav.Link>
                  <NavDropdown title="Contacts" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#AddContact">Add Contact</NavDropdown.Item>
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
                  
                  <img src={User} class='imgUser' alt="Logo"/>
                  <span class="simpletext">Username <br></br> <text class="statusOnline" onClick={signOutUser}> Log Out</text> </span> 
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      
    )
  }
  