import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class NavbarHeader extends Component {
    render(){
        return(
         <div className="App-navbar">
          <ul className="nav-navbar">
            <li ><Link to="/#">Fork Us</Link></li>
            <li><Link to="/#">Contact Us</Link></li>
            <li><Link to="/#">FAQ</Link></li>
          </ul>
        </div>
        )
    }     
}

export default NavbarHeader;