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
import logo from './logo.png';
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
            <div className="mr-auto">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
          <div className="footer">
            <ul>
              <li><a href=""><i className="fa fa-facebook"></i></a></li>
              <li><a href=""><i className="fa fa-twitter"></i></a></li>
              <li><a href=""><i className="fa fa-linkedin"></i></a></li>
              <li><a href=""><i className="fa fa-stack-overflow"></i></a></li>
              <li><a href=""><i className="fa fa-free-code-camp"></i></a></li>
              <li><a href=""><i className="fa fa-codepen"></i></a></li>
              <li><a href=""><i className="fa fa-github"></i></a></li>
            </ul>
          </div>

          </div>
          <div className="wrapper">
            <Row>
            <p>This is body</p>
            </Row>

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