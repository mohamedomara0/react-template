import React from 'react';
import {Contactdiv,Contacttitle,Contactspan,Form,Input,Forminput,Inputtext,Inputemail,Inputsub,Textarea,Inputsubmit} from './style.js'
import Footer from './../footer';
const Contact =()=> {
    return (
    <React.Fragment>
          <Contactdiv>
      <div class="container">
          <Contacttitle><Contactspan>Drop </Contactspan>Me A line</Contacttitle>
          <Form action="">
              <Forminput>
                  <Inputtext type="text" placeholder="Your Name"/>
                  <Inputemail type="email" placeholder="Your Email"/>
              </Forminput>
              <Inputsub type="text" class="sub" placeholder="Your Subject"/>
              <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
              <Inputsubmit type="submit" value="Send Message"/>
          </Form>
      </div>
  </Contactdiv>
  <Footer />
    </React.Fragment>
  
    );
}
export default Contact;
