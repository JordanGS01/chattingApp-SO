import './NavBarStyle.css'

import Logo from '../../Images/logoPurple.png'
import User from '../../Images/user.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Geolocation } from '../geolocation/Geolocation'
import {Translate} from '../translate/translatecomp'

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
                  
                  <Geolocation  />
                  <Translate></Translate>
                  <img src={User} className='imgUser'  style={{marginLeft:'10px'}}  alt="Logo"/>
                  <span className="simpletext">Username <br></br> <p className="statusOnline" onClick={signOutUser}> Log Out</p> </span> 
                  
                </Nav>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>

    )
  }
  