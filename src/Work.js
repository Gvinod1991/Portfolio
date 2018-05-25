import React, { Component } from 'react';
import {Row,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button,Col } from 'reactstrap';

class Work extends Component {

  render() {

    return (
      
          <div className="wrapper">
            <Row>
            <div className="container content">
                <div className="sectionTitle ">
                   <h3>Projects</h3>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 top">
                   <p>Here is some projects i have built.Some project's source code is on <a href="https://github.com">Github</a> </p>
                </div>
                <Row>
                <Col >
                <Card>
                   <CardBody>
                    <CardTitle>QuoteMachine</CardTitle>
                    <CardSubtitle>App to display the random quotes when user wants see.</CardSubtitle>
                    
                    <Button>View Source</Button> 
                    <Button> View Demo</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col >
                <Card>
                   <CardBody>
                    <CardTitle>Weather-App</CardTitle>
                    <CardSubtitle>This app will show the whether condition(only temprature) based on it's location.</CardSubtitle>
                    
                    <Button>View Source</Button> 
                    <Button> View Demo</Button>
                  </CardBody>
                </Card>
                </Col >
                <Col >
                <Card>
                   <CardBody>
                    <CardTitle>PhpQueryBuilder</CardTitle>
                    <CardSubtitle>It simply buids the quries in mysql.</CardSubtitle>
                    <Button>View Source</Button> 
                    <Button> View Demo</Button>
                  </CardBody>
                </Card>
                </Col >
                </Row>
            </div>   
            </Row>

          </div>
    );
  }
  
}

export default Work;