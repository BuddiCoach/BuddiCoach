import React, {Component} from 'react';
import DashboardHeader from './dashboardHeader';
import './dashboard.css'
import DashboardMain from './dashboardMain';
import TableDashboard from './TableDashboard';


class Dashboard extends Component {
    
     
        
    
      render() {
        return (
          <div className="App">
            <DashboardHeader />
              <DashboardMain  />
              <TableDashboard />
            </div>
          
        );
      }
    }
    
    export default Dashboard;