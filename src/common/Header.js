import React from 'react';
//import { Row } from 'reactstrap';
import logo from '../logo.png';
const Header = () => {
    return  <div className="header">
            <div className="mr-auto">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          <ul className="menu">
            <li><a href="/">About</a></li>
            <li><a href="/work">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
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
      };
export default Header;