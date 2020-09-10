import React from 'react';
import {Link} from 'react-router-dom';
import {Navbarsection,Logo,Logotext,Ullist,Listitem,Anchor} from "./style.js";
const Navbar = () => {
    return (
      <Navbarsection>
            
      <div className="container">
          
          <Logo>
              <Logotext>Portfollio mohamed</Logotext>
          </Logo>
          
        
          <Ullist>
              <Listitem><Link className="link" exact to="/">Home</Link></Listitem>
              <Listitem><Anchor  href="#">Work</Anchor></Listitem>
              <Listitem><Anchor href="#">Portfolio</Anchor></Listitem>
              <Listitem><Anchor href="#">Resume</Anchor></Listitem>
              <Listitem><Anchor href="#">About</Anchor></Listitem>
              <Listitem><Link className="link" to="/contact">Contact</Link></Listitem>
          </Ullist>
          
      </div>
      
  </Navbarsection>
    );
}
export default Navbar;
