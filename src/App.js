import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import SignIn from './componentSignIn/SignIn';
import Dashboard from './componentDashboard/Dashboard'


class App extends Component {

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({message: json}));
  }
    

  render() {
    return (
      <div className="App">
         <Route exact path="/" render={() => (
        <SignIn />
        )}/> 
        <div>
        <Route exact path="/dashboard/" render={() => (
          <Dashboard />
        )}/> 
        <div>
        
        </div>
        </div>
      </div>
    );
  }
}

export default App;
