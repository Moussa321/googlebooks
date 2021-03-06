import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import AuthPage from "../pages/authPage";
import HomePage from "../pages/homePage";
import bookDetails from "../pages/bookDetails";

const mapStateToProps = (state) => ({
  auth: state.auth,
});
class MyRouts extends React.Component {
  constructor() {
    super();
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }
  isLoggedIn() {
    if (this.props.auth.userId) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AuthPage} />
            <Route exact path="/sign-in" component={AuthPage} />
            <Route
              exact
              path="/home"
              render={() =>
                this.isLoggedIn() ? <Redirect to="/sign-in" /> : <HomePage />
              }
            />
            <Route path="/book" component={bookDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default connect(mapStateToProps)(MyRouts);
