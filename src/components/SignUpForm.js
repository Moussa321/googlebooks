import React, { Component } from "react";
import * as authActions from "../store/actions/auth";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, getState) => {
  return {
    auth: (state) => dispatch(authActions.signup(state.email, state.password)),
  };
};

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.state.password !== this.state.repeatPassword) {
      alert("Passwords does not match");
    } else {
      try {
        await this.props.auth(this.state);
        alert("A registration was submitted!");
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Repeat Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="repeat your password"
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              By signing up you agree to all statements in
              <a href="/" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(SignUpForm);
