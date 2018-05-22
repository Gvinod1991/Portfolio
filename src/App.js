import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Container, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Row,Col } from 'reactstrap';
import logo from './logo.svg';
//import axios from 'axios';

class App extends Component {
 
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
 
  render() {
    var  home_url="#";

    return (
      
        <Container fluid>
          <div className="header">
            
            <Navbar color="faded" light>
            <div className="mr-auto">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <NavbarToggler onClick={this.toggleNavbar} className="hidden-md-up mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href={home_url}><i className="fa fa-home"></i> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><i className="fa fa-envelope"></i> Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><i className="fa fa-info"></i> About</NavLink>
                </NavItem>
           </Nav>
            </Collapse>
          </Navbar>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
          </div>
          
        </Container>
    );
  }
  
}
Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

export default App;

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}