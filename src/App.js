import React, {Component} from 'react';
import './signInComponents/signIn.css';
import NavbarHeader from './signInComponents/NavbarHeader';
import AppName from './signInComponents/AppName';
import Form from './signInComponents/Form'

class App extends Component {

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({message: json}));
  }
    

  render() {
    return (
      <div className="App">
        <NavbarHeader/>
        <div className="container">
          <AppName/>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
