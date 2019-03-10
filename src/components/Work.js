import React from 'react';
import { Card, Row,Col,CardImg, CardText, CardBody,
  CardTitle,Container } from 'reactstrap';
import bj_dashboard from '../img/bj_dashboard.png';
import BJ_be from '../img/BJ_be.png';
import mystyle_web from '../img/mystyle_web.png';
import mystyle_app from '../img/mystyle_app.png';
import bj_app from '../img/bj_app.png';

  const Work = (props) => {
    return (
      <Container>
        <Row>
        <Col md="4"></Col>
           <Col md="4">
        <h3 style={{textAlign:'center',fontWeight:'bold',paddingBottom:10,borderBottomStyle:'solid',borderBottomColor:'#444',borderBottomWidth:2}}> Projects</h3>
          <br/>
          </Col>
          <Col md="4"></Col>
        </Row>
         <Row>
           <Col md="4">
            <Card>
              <CardImg top width="100%" src={bj_dashboard} alt="Card image cap" />
              <CardBody>
                <CardTitle><h2>Hotelier Admin Panel of Bookingjini</h2></CardTitle>
                <br/>
                <CardText style={{fontSize:14}}>To manage the inventory and bookings of the hoteliers.</CardText>
                <Row>
                <Col md="4"></Col>
                  <Col md="4">
                <a className="view" style={{textAlign:'center',fontWeight:'bold',paddingBottom:5,borderBottomStyle:'solid',borderBottomColor:'#444',borderBottomWidth:2}} href="https://admin.bookingjini.com" target="_blank" > View More</a></Col>
                  <br/>
                  <Col md="4"></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardImg top width="100%" src={BJ_be} alt="Card image cap" />
              <CardBody>
                <CardTitle><h2>Booking Engine Panel of Bookingjini</h2></CardTitle>
                <CardText style={{fontSize:14}}>Customer hotel bookings engine to book the rooms directly from hotel's website.</CardText>
                <Row>
                <Col md="4"></Col>
                  <Col md="4">
                  <a className="view" style={{textAlign:'centadminadminer',fontWeight:'bold',paddingBottom:5,borderBottomStyle:'solid',borderBottomColor:'#444',borderBottomWidth:2}} href="https://ibe.bookingjini.com" target="_blank" > View More</a></Col>
                   <Col md="4"></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardImg top width="100%" src={mystyle_web} alt="Card image cap" />
              <CardBody>
                <CardTitle><h2>MyStyle Web Admin App</h2></CardTitle>
                <br/>
                <CardText style={{fontSize:14}}>To manage the salon service vendors and bookings of salon services from customers</CardText>
                <Row>
                <Col md="4"></Col>
                  <Col md="4">
                  <a className="view" style={{textAlign:'center',fontWeight:'bold',paddingBottom:5,borderBottomStyle:'solid',borderBottomColor:'#444',borderBottomWidth:2}} href="http://mystyletech.com" target="_blank" > View More</a></Col>
                   <Col md="4"></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
        <Col md="4">
            <Card>
              <CardImg top width="100%" src={bj_app} alt="Card image cap" />
              <CardBody>
                <CardTitle><h2>Mobile App Hotelier Dashboard of Bookingjini</h2></CardTitle>
                <br/>
                <CardText style={{fontSize:14}}>To manage the inventory and bookings of the hoteliers from mobile app</CardText>
                <Row>
                <Col md="4"></Col>
                  <Col md="4">
                  <a className="view" style={{textAlign:'center',fontWeight:'bold',paddingBottom:5,borderBottomStyle:'solid',borderBottomColor:'#444',borderBottomWidth:2}} href="https://play.google.com/store/apps/details?id=com.product.bookingjini" target="_blank" > View More</a></Col>
                   <Col md="4"></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        <Col md="4">
            <Card>
              <CardImg top width="100%" src={mystyle_app} alt="Card image cap" />
              <CardBody>
                <CardTitle><h2>Mobile App MyStyle </h2></CardTitle>
                <br/>
                <CardText style={{fontSize:14}}>App to to book the nearest salon services in the their area.</CardText>
                <Row>
                <Col md="4"></Col>
                  <Col md="4">
                  <a className="view" style={{textAlign:'center',fontWeight:'bold',paddingBottom:5,borderBottomStyle:'solid',borderBottomColor:'#444',borderBottomWidth:2}} href="https://play.google.com/store/apps/details?id=com.mystyle.mystyle&hl=en&hl=en" target="_blank" > View More</a></Col>
                   <Col md="4"></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Work;
