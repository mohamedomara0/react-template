import React, {Component} from 'react';
import About from '../about/index';
import Footer from '../footer/index';
import Home from '../home/index';
import Portfolio from '../portfolio/index';
import Profile from '../profile/index';
import Socialmedia from '../socialmedia/index';
import Work from '../work/index';

class Index extends Component{
  render(){
    return (
      <div className="App">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />
        
      </div>
    );
  }
 
}

export default Index;
