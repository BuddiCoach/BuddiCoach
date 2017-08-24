import React, {Component} from 'react';
import DashboardHeader from './dashboardHeader';
import DashboardMain from "./dashboardMain";
import './dashboard.css'



class Dashboard extends Component {
    
     
        
    
      render() {
        return (
          <div className="App">
            <DashboardHeader />
              <DashboardMain  />
            </div>
          
        );
      }
    }
    
    export default Dashboard;