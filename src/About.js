import React, { Component } from 'react';
import {Row } from 'reactstrap';

class About extends Component {

  render() {

    return (
          <div className="wrapper">
            <Row>
            <div className="container content">
                <div className="sectionTitle ">
                   <h3>About</h3>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 top">
                    Hello everyone ,I'm <strong>G.VINOD</strong>
                </div>
                <div className="col-md-12 col-sm-4  col-xs-12 text-justify top  color">
                    <span className="fa fa-code"></span> I am coding geek ,fond of learning new technologies in web.I love travelling,would say if travelling is free i will roaming arround the world and never come back.Bike riding is one of my hobby and have interest in cars and watching movies.
                
                </div>
            </div>   
            </Row>

          </div>
    );
  }
  
}

export default About;