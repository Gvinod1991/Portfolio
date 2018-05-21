import React, { Component } from 'react';
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
  DropdownItem,Row } from 'reactstrap';
import logo from './logo.svg';
import axios from 'axios';

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
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>*/
      <div>
        <Container>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"> <img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
          
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="pull-right">
              <NavItem>
                <NavLink href={home_url}><i className="fa fa-home"></i> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-user-envelope"></i> Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-info"></i> About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        </Container>
      </div>
    );
  }
}

export default App;
