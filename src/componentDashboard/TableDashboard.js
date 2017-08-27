import React, { Component } from 'react';




class TableDashboard extends Component {

    state= {
        inputTableLeft: "",
        inputTableMidd: "",
        inputTableRight: "",
        id: 4,
        tableItems: [
          {
            event: "Celine Dion",
            budget: "45.00",
            actual: "45.00",
            id: 1
          },
          {
            event: "Christmas",
            budget: "5.00",
            actual: "10.00",
            id: 2
          },
          {
            event: "Shopping",
            budget: "35.00",
            actual: "40.00",
            id: 3
          }
        ]
      };
    

    updateInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
      
    }

    
    keyPressed=(e) => {
        if(e.which === 13){
        console.log('value is:', e.target.value); 
        this.setState({ 
            inputTableLeft: "",
            inputTableMidd: "",
            inputTableRight: "",
            tableItems: [
                        ...this.state.tableItems,
                        {
                         event: this.state.inputTableLeft,
                         budget: this.state.inputTableMidd,
                         actual: this.state.inputTableRight,
                         id: this.state.id++
                        }
                    ]
               });       
    }
} 




    render(){

        const showInputTable = this.state.tableItems.map((inputTable, index) => {
            return  (
                <tr  key={inputTable.id} className="table-row"> 
                    <td>{inputTable.event}</td> 
                    <td>{inputTable.budget}</td> 
                    <td>{inputTable.actual}</td> 
                    </tr>
            )
        })
       

        return(
            <div className="dashboard-table"> 
          <table>
            <tbody>
                <tr>
                <th className="table-head">black friday</th>
               </tr>
                <tr className="headtb">
                  <th></th> 
                  <th>Budget</th>
                  <th>Actual</th>
                </tr>
                
                 {showInputTable}

                   <tr className="input">
                   <td><input className="leftinput"
                               type="text"
                               placeholder="add items"
                               name="inputTableLeft"
                               value={this.state.inputTableLeft}
                               onChange={this.updateInput}
                               onKeyPress={this.keyPressed}
                               
                               /></td>
                   <td><input className="middinput"
                               type="numbers"
                               placeholder="budget"
                               name="inputTableMidd"
                               value={this.state.inputTableMidd}
                               onChange={this.updateInput}
                               onKeyPress={this.keyPressed}
                               
                               /></td> 
                   <td><input className="rightinput"
                               type="numbers"
                               placeholder="actual"
                               name="inputTableRight"
                               value={this.state.inputTableRight}
                               onChange={this.updateInput}
                               onKeyPress={this.keyPressed}
                               
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
                   </tr>

                </tbody>
            </table>

                  
            </div>
         
        )
    }     
}

export default TableDashboard;