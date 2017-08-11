import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Form extends Component {
    render() {
        return (
        <div className="group-form">
         <div className="section-form">
           <form>
               <i className="fa fa-user"/>
              <input  type="text"  placeholder="enter username" name="name" />
              <i className="fa fa-key"/>
              <input type="password"  placeholder="enter password" name="password" />  
          </form>
             </div>
                <div className="app-btn">
                  <button className="btn1" type="submit">Sign in</button>
                </div>
                 <div className="app-signup">
                    <p>Don't have an account? <Link className="link" to="#"> Sign Up here</Link></p>  
                </div>
              </div>  
        )
    }
}

export default Form;

 