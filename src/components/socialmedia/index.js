import React from 'react';
import  {Socialmediadiv,Socialdiv,Socialicon,Socialp,Socialspan,Socialspaninfo } from './style.js'
const Socialmedia =()=> {
    return (
      <Socialmediadiv>
            
      <Socialdiv item="1">
          <Socialicon className="icon fa fa-facebook fa-lg"></Socialicon>
          <Socialp>
              <Socialspan>Follow Me on</Socialspan>
              <Socialspaninfo>Social Facebook</Socialspaninfo>
          </Socialp>
      </Socialdiv>
      
      <Socialdiv item="2">
          <Socialicon className="icon fa fa-twitter fa-lg"></Socialicon>
          <Socialp>
              <Socialspan>Tweet Me on</Socialspan>
              <Socialspaninfo>Social twitter</Socialspaninfo>
          </Socialp>
      </Socialdiv>
      
      <Socialdiv item="3">
          <Socialicon className="icon fa fa-pinterest fa-lg"></Socialicon>
          <Socialp>
              <Socialspan>Pin Me on</Socialspan>
              <Socialspaninfo>Social Pinterest</Socialspaninfo>
          </Socialp>
      </Socialdiv>
  </Socialmediadiv>
    );
}
export default Socialmedia;
