import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };

  updateEmail = email => {
    this.setState({ email: email.trim() });
  };

  updateUsername = username => {
    this.setState({ username: username.trim() });
  };

  updatePassword = password => {
    this.setState({ password: password.trim() });
  };

  clearInput = () => {
    this.setState({ username: "" });
    this.setState({ password: "" });
  };

  render() {
    const { email } = this.state;
    const { username } = this.state;
    const { password } = this.state;

    return (
      <div className="group-signup-form">
        <div className="section-signup">
          <form>
            <i className="fa fa-envelope" aria-hidden="true" />
            <input
              className="email"
              type="text"
              placeholder="enter email"
              name="name"
              value={email}
              onChange={event => this.updateEmail(event.target.value)}
            />
            <i className="fa fa-user" />
            <input
              className="username"
              type="text"
              placeholder="enter username"
              name="name"
              value={username}
              onChange={event => this.updateUsername(event.target.value)}
            />
            <i className="fa fa-key" />
            <input
              className="password"
              type="password"
              placeholder="enter password"
              name="password"
              value={password}
              onChange={event => this.updatePassword(event.target.value)}
            />
          </form>
        </div>
        <div className="app-btn">
          <button onClick={this.clearInput} className="btn1" type="submit">
            <Link className="signup-button" to="/dashboard">
              {" "}Sign up
            </Link>
          </button>
        </div>
        <div className="app-signup">
          <p>
            Already have an account?{" "}
            <Link className="signin-link" to="/">
              {" "}SignIn here
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
