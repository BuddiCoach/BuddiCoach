import React, { Component } from 'react';




class TableDashboard extends Component {








    render(){
        return(
            <div className="dashboard-table"> 
          <table>
            <tbody>
                <tr>
                <th className="table-head">Black Friday</th>
               </tr>
                <tr className="headtb">
                  <th>#</th> 
                  <th>Budget</th>
                  <th>Actual</th>
                </tr>
 
                 <tr className="table-row">
                  <td>Samsung Galaxy s7</td>
                  <td>150.00</td>
                  <td>80.00</td>
                 </tr>
 
                  <tr className="table-row">
                   <td>Hulk Pants</td>
                   <td>20.00</td>
                   <td>21.10</td> 
                  </tr>

                   <tr className="table-row">
                    <td>Fidget Spinner</td>
                    <td>1.00</td>
                    <td>0.70</td>
                   </tr>

                   <tr className="input">
                   <td><input className="leftinput"
                               type="text" 
                               /></td>
                   <td><input className="middinput"
                               type="numbers" 
                               /></td> 
                   <td><input className="rightinput"
                               type="numbers"
                               /></td>
                   </tr>

                   <tr className="total">
                    <td>Total</td>
                    <td>170.00</td>
                    <td>21.80</td>
                   </tr>

                   <tr>
                   <td>Start</td>
                   <td>End</td> 
                   <td>Add expense</td>
                   </tr>

                </tbody>
            </table>

                  
            </div>
         
        )
    }     
}

export default TableDashboard;