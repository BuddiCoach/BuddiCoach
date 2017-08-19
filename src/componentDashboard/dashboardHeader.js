import React, { Component } from 'react';
import {Link} from 'react-router-dom';





class DashboardHeader extends Component {
    render(){
        return(
            <div className="name-app">
            <div className="logoDashboard">
            <h1>BuddiCoach</h1><span className="dashboard-logo"></span>
            </div>
            <div className="app-dashboard">
          <ul className="nav-dashboard">
            <li ><Link to="/">Name User</Link></li>
            <li><Link to="/">Log Out</Link></li>
          </ul>
          </div>
         </div>
         
        )
    }     
}

export default DashboardHeader;