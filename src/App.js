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
        <Container className="container-fluid">
        <Row>
          <Col lg="4">.col</Col>
          <Col lg="8">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"> <img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
          
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="pull-right">
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
        </Col>
        </Row>
        </Container>
    );
  }
  
}
Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

export default App;
