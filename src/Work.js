import React, { Component } from 'react';
import {Row,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button,Col } from 'reactstrap';
import es6 from './es6.png';
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
                   <CardImg top width="100%" src={es6} alt="Card image cap" />
                    <CardTitle className="text-center">QuoteMachine</CardTitle>
                    
                    <CardText>App to display the random quotes when user wants see.</CardText>
                    <Button> View Source </Button>
                    
                  </CardBody>
                </Card>
                </Col>
                <Col >
                <Card>
                   <CardBody>
                   <CardImg top width="100%" src={es6} alt="Card image cap" />
        
                    <CardTitle className="text-center">Weather-App</CardTitle>
                    
                    <CardText >This app will show the whether condition(only temprature) based on it's location.</CardText>
                    
                    <Button>View Source</Button> 
                    
                  </CardBody>
                </Card>
                </Col >
                <Col >
                <Card>
                   <CardBody>
                   <CardImg top width="100%" src={es6} alt="Card image cap" />
                    <CardTitle className="text-center">PhpQueryBuilder</CardTitle>
                    <CardText>It simply buids the quries in mysql.</CardText>
                    <Button>View Source</Button> 
                    
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