import React, { Component } from "react";
import SignUpHeader from "./SignUpHeader";
import SignUpForm from "./SignUpForm";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signup-container">
        <SignUpHeader />
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
