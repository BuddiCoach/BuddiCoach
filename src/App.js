import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import SignIn from './componentSignIn/SignIn';
import Dashboard from './componentDashboard/Dashboard';
import SignUp from "./componentSignUp/SignUp";


class App extends Component {

  
  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({message: json}));

      let headers = new Headers({
        'Access-Control-Allow-Origin': '*'
         
      });
 
     const fetchBudget = () =>
      fetch('http://localhost:3001/api/budgets/' , { headers })
       .then(res => res.json()) 
       console.log(fetchBudget()) 
    
  }
    

  render() {
    return (
      <div className="App">
         <Route exact path="/" render={() => 
        <SignIn />
        }/> 
        <div>
        <Route exact path="/dashboard/" render={() => 
          <Dashboard  />
        }/> 
        </div>
        <div>
          <Route exact path="/signup/" render={() => 
          <SignUp />
          }/>
        </div>
      </div>
    );
  }
}

export default App;
