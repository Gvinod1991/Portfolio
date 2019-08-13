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
                <CardText style={{fontSize:14}}>Web application to help hoteliers to manage their bookings, inventory, and distribution of inventory to multiple channel partners. My role is to develop the API endpoints and Develop the UI & Integration of API.Technology stack is ReactJs,NodeJs/ExpressJs, MySql and HTML5/CSS3.</CardText>
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
                <CardText style={{fontSize:14}}>Booking engine app to book rooms directly from the hotel's website without with very less price than other online travel agents.My role is to lead the team of 3 members including me. Technology stack is React Js and Material CSS.</CardText>
                <Row>
                <Col md="4"></Col>
                  <Col md="4">
                  <a className="view" style={{textAlign:'center',fontWeight:'bold',paddingBottom:5,borderBottomStyle:'solid',borderBottomColor:'#444',borderBottomWidth:2}} href="https://ibe.bookingjini.com" target="_blank" > View More</a></Col>
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
                <CardText style={{fontSize:14}}>Admin panel to manage the salon and spa service booking and inventory. Vendors are listed and inventory of each salon vendor updated via this application. Technology stack is ReactJs,NodeJs/Express.Js and MongoDB.My role to manage the team of 2 and develop the API of inventory module and API integration in UI.</CardText>
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
                <CardText style={{fontSize:14}}>ToMobile application to manage the hotel such as the creation of new property, Manage inventory and rates, bookings report for both Android and IOS platform. Technology stack is ReactNative and ReactNative Elements</CardText>
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
                <CardText style={{fontSize:14}}>Mobile application to book the salon and spa services in India. Users can book seats without going to the salon by choosing the service, date the service and payment options. Long waiting queue problem is solved in this application. Technology stack is ReactNative and Javascript and Technology stack is ReactNative and ReactNative Elements</CardText>
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
