import React, {Component} from 'react';
import './App.css';
import NavbarHeader from './NavbarHeader';
import AppName from './AppName';
import Form from './Form'

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
