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
            <li><a href="https://www.facebook.com/godti.vinod"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/GodtiVinod"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/godti-vinod-37bb46a9/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://stackoverflow.com/users/4850181/godti-vinod"><i className="fa fa-stack-overflow"></i></a></li>
            <li><a href="https://www.freecodecamp.org/gvinod1991"><i className="fa fa-free-code-camp"></i></a></li>
            <li><a href="https://codepen.io/GodtiVinod"><i className="fa fa-codepen"></i></a></li>
            <li><a href="https://github.com/Gvinod1991"><i className="fa fa-github"></i></a></li>
            </ul>
          </div>

          </div>
      };
export default Header;