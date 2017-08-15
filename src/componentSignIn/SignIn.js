
import React, {Component} from 'react';
import NavbarHeader from './NavbarHeader';
import AppName from './AppName';
import Form from './Form';
import './signIn.css';


class SignIn extends Component {
    
     
        
    
      render() {
        return (
          <div className="App">
            <NavbarHeader />
            <div className="container">
              <AppName  />
              <Form  /> 
            </div>
          </div>
        );
      }
    }
    
    export default SignIn;