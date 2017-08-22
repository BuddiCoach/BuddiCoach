import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpHeader extends Component {
  render() {
    return (
      <div className="name-app">
        <div className="logoDashboard">
          <h1>BuddiCoach</h1>
          <span className="dashboard-logo" />
        </div>
        <div className="app-dashboard">
          <ul className="nav-dashboard">
            <li>
              <Link to="https://github.com/BuddiCoach" target="_blank">
                Fork Us
              </Link>
            </li>
            <li>
              <Link to="/#">Contact Us</Link>
            </li>
            <li>
              <Link to="/#">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SignUpHeader;
