import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class DashboardMain extends Component {
    render(){
        return(
            <div className="dashboard-main">
                <ul className= "dashboard-left">
                <h4 className="head">Dashboard</h4>
                <li className="list"><Link to="/">Budget</Link></li>
                <li className="list"><Link to="/">Chart</Link></li>
                </ul>
                <ul className="dashboard-middle">
                <h4 className="head1">Add Budget<Link to="/" className="svg-btn"></Link></h4>
                 <li className="list"><Link to="/">Christmas</Link></li>
                 <li className="list" ><Link to="/">Black friday</Link></li>
                 <li className="list"><Link to="/">Tony's birthday</Link></li>
               </ul> 
            </div>
         
        )
    }     
}

export default DashboardMain;