import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './dashboard.css';
import TableDashboard from "./TableDashboard";
import ChartDashboard from "./ChartDashboard";




class DashboardMain extends Component {

    state = {
        inputValue:"",
        messages:['Black friday', 'Christmas', "Tony's birthday" ],
        displayTable: true     
    }




 showTable = () => {
    this.setState({ displayTable: true });
    console.log("I was clicked and should show table");
  };

  showChart = () => {
    this.setState({ displayTable: false });
    console.log("I was clicked and should show chart");
  };


  handleClick= () => {
 console.log('clicked');
 let showInput = document.getElementById('input-addbudget');
 showInput.style.display= "block"; 
 showInput.focus();
}


updateInputValue= (e) => {
    this.setState({ 
        inputValue: e.target.value,
    
    });  
}


keyPress=(e) => {
    if(e.which === 13){
    console.log('value is:', e.target.value); 
    this.setState({ 
        inputValue: '',
       messages: [this.state.inputValue, ...this.state.messages]
    });  
    let showInput = document.getElementById('input-addbudget');
    showInput.style.display= "none"; 
    
  } 
 
 }
 



    render(){
        const currentMessage = this.state.messages.map((inputValue, index) => {
            return (
                <li key={index}><Link to="/dashboard">{inputValue}</Link></li>
            )
        })

        return(
           //<div>
            <div className="dashboard-main">
                <ul className= "dashboard-left">
                <h4 className="head">Dashboard</h4>
                <li className="list"><Link to="/dashboard" onClick={this.showTable}>Budget</Link></li>
                <li className="list"><Link to="/dashboard" onClick={this.showChart}>Chart</Link></li>
                </ul>
                <ul className="dashboard-middle">
                <div>
                <h4 className="head1">Add Budget</h4>
                <svg className="svg-btn"
                       onClick={this.handleClick}
                       >
                       </svg>
                <input type="text" 
                       placeholder="Add budget" 
                       id="input-addbudget" 
                       value={this.state.inputValue}
                       onChange={this.updateInputValue}
                       onKeyPress={this.keyPress}
                       />
                </div>
                 {currentMessage}
               </ul>
               <div>
               {this.state.displayTable && <TableDashboard displayTable={true} />}
              {this.state.displayTable === false &&
                <ChartDashboard displayTable={false} />}
               </div>
            </div>
           // <div>
           
            //</div>
            //</div>
        )
    }     
}

export default DashboardMain;