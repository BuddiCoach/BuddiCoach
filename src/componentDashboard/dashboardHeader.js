import React, { Component } from 'react';
import {Link} from 'react-router-dom';





class DashboardHeader extends Component {
    render(){
        return(
         <div className="App-dashboard">
          <ul className="nav-dashboard">
            <li ><Link to="/">Name User</Link></li>
            <li><Link to="/">Log Out</Link></li>
          </ul>
          <div className="app-name">
           <div className="app-logo">
           <h1>BuddiCoach</h1><span className="logo"></span>
           </div>
          </div>
         </div>
        )
    }     
}

export default DashboardHeader;