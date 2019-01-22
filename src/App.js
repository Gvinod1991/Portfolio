import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      yr:(new Date()).getFullYear()
    }
  }
  render() {
    return (
      <div style={{paddingTop:70}}> 
			  <Header/>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/projects' component={Work} />
						<Route exact path='/contact' component={About} />
					</Switch>
				</Router>
				<Footer/>
      </div>
    );
  }
}

export default App;
