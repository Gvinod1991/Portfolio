import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './common/Header';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import {Container } from 'reactstrap';
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
    return (
        <Container fluid>
          <Header/>
          <Router>
            <Switch>
              <Route exact path='/' component={About} />
              <Route exact path='/work' component={Work} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </Router>
        </Container>
    );
  }
}
Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}
export default App;

