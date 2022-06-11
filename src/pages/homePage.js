import React, { Component } from "react";

import "../index.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  auth: state.auth,
});
class homePage extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div className="formField">
          <button className="formFieldButton" onClick={this.getData}>
            getData
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(homePage);
