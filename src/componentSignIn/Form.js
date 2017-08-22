import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Form extends Component {


state = {
    username:'',
    password:''   
}

updateUsername = (username)=> {
    this.setState({ username: username.trim() })
}

updatePassword = (password)=> {
    this.setState({ password: password.trim() })
}


clearInput = () => {
    this.setState({username: ''})
    this.setState({password: ''})
}




    render() {


     const{username}= this.state
     const{password}= this.state



        return (
        <div className="group-form">
         <div className="section-form">
             <form>
               <i className="fa fa-user"/>
              <input className="username" type="text"
                      placeholder="enter username" 
                      name="name" 
                      value={username}
                      onChange={(event)=> this.updateUsername(event.target.value)}
                      />
              <i className="fa fa-key"/>
              <input className="password" type="password"
                     placeholder="enter password"
                     name="password"
                     value={password}
                     onChange={(event)=> this.updatePassword(event.target.value)} 
                     />  
               </form>
             </div>
                <div className="app-btn">
                  <button onClick={this.clearInput} className="btn1" type="submit"><Link className="signin" to="/dashboard"> Sign in</Link></button>
                </div>
                 <div className="app-signup">
                    <p>Don't have an account? <Link className="signup" to="/signup"> Sign Up here</Link></p>  
                </div>
              </div>  
        )
    }
}

export default Form;

 