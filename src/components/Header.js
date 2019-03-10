import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
  
class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
    return(<div>
       <Navbar style ={{borderRadius:0}}color="dark" dark expand="md">
          <NavbarBrand style={{paddingTop:10,fontSize:20}} id="green-terminal" href="/">Kod3r@kod3r-dev ~ $</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color:'#9d9d9d'}}href="/">/home/kod3r</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  style={{color:'#9d9d9d'}} href="/projects">~/projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    )
    };
}
//Module Exports
export default Header;