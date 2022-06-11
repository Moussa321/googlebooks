import React, { Component } from "react";
import * as authActions from "../store/actions/auth";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, getState) => {
  return {
    auth: (state) => dispatch(authActions.login(state.email, state.password)),
  };
};
class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      await this.props.auth(this.state);
      this.props.history.push("/home");
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
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
            <button className="formFieldButton" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignInForm);
