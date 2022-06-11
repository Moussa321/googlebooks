import React, { Component } from "react";
import * as authActions from "../store/actions/auth";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const mapDispatchToProps = (dispatch, getState) => {
  return {
    auth: (state) => dispatch(authActions.login(state.email, state.password)),
    authGoogle: (response) =>
      dispatch(
        authActions.loginGoogle(response.googleId, response.accessToken)
      ),
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
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  start() {
    gapi.client.init({
      clientId:
        "923135927843-8l3bji5eutdl9mkum2udj029u7cn3pb6.apps.googleusercontent.com",
      scope: "email",
    });
  }
  componentDidMount() {
    gapi.load("client:auth2", this.start);
  }

  googleFailure(response) {
    alert("Failed to connect with google");
    console.log(response);
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
    console.log("leh", event);
    try {
      await this.props.auth(this.state);
      this.props.history.push("/home");
    } catch (err) {
      console.log(err);
    }
  }
  async responseGoogle(response) {
    console.log(response.googleId, response.accessToken);

    try {
      await this.props.authGoogle(response);
      this.props.history.push("/home");
    } catch (err) {
      console.log(err);
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

            <GoogleLogin
              className="Googlebtn"
              clientId="923135927843-8l3bji5eutdl9mkum2udj029u7cn3pb6.apps.googleusercontent.com"
              onSuccess={this.responseGoogle}
              onFailure={this.googleFailure}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignInForm);
