import React, { Component } from 'react';
import {Row } from 'reactstrap';

class Contact extends Component {

  render() {

    return (
      
          <div className="wrapper">
            <Row>
            <div className="container content">
                <div className="sectionTitle ">
                   <h3>Contact</h3>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 top">
                   Feel free to contact me. 
                </div>
                <div className="col-md-12 col-sm-4  col-xs-12 contact">
                <ul >
                    <li><a href="https://www.facebook.com/godti.vinod"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/GodtiVinod"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/godti-vinod-37bb46a9/"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://stackoverflow.com/users/4850181/godti-vinod"><i className="fa fa-stack-overflow"></i></a></li>
                    <li><a href="https://www.freecodecamp.org/gvinod1991"><i className="fa fa-free-code-camp"></i></a></li>
                    <li><a href="https://codepen.io/GodtiVinod"><i className="fa fa-codepen"></i></a></li>
                    <li><a href="https://github.com/Gvinod1991"><i className="fa fa-github"></i></a></li>
                  </ul>
                  <form>
                    <div class="form-group">
                    <input   class="form-control input-lg text"  type="text" name="username" placeholder="your name" required/><p class="text_validity"></p>
                    
                    </div>
                    <div class="form-group">
                    <input class="form-control input-lg" type="email" name="emailid" placeholder="your email id" required/>
                    
                    </div>
                    <div class="form-group">
                    <input id="subject" class="form-control input-lg" type="text" name="subject" placeholder=" subject" required/><p class="subject_validity"></p>
                    </div>
                    <div class="form-group">
                    <textarea   rows="7"  cols="5" class="form-control" placeholder="Message" required></textarea><p class="TextArea"></p>
                    </div>
                    
                    <button   class="btn btn-lg btn-secondary pull-right"  type="submit" > <i class="fa fa-paper-plane"></i> Send </button>
                    
                  </form>
                </div>
            </div>   
            </Row>

          </div>
    );
  }
  
}

export default Contact;