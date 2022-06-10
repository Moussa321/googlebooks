import React, { Component } from "react";

class homePage extends Component {
  render() {
    return (
      <div className="homepage">
        {/*====== Scroll To Top Area Start ======*/}
        <div id="scrollUp" title="Scroll To Top">
          <i className="fas fa-arrow-up" />
        </div>
        {/*====== Scroll To Top Area End ======*/}
        <div className="main">
          <h1 className="">Moussa</h1>
        </div>
      </div>
    );
  }
}

export default homePage;
