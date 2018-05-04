import React, { Component } from 'react';
import './Header.css';
import AppBar from 'material-ui/AppBar';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';

import {Link} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                
                <Navbar className='navbar' fixedTop={true} inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/" className='brandName' onClick={this.handleClose}>Cozy Restaurant</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="/about" onClick={this.handleClose}>
                      About Us
                    </NavItem>
                    <NavItem eventKey={2} href="/menu">
                      Menu
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      Online Order
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    Gallery
                    </NavItem> <NavItem eventKey={2} href="#">
                      Contact
                    </NavItem>
                  </Nav>
                  
                </Navbar.Collapse>
              </Navbar>;
           
            </div>
        );
    }
}

export default Header;