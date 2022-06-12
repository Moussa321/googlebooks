import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

class bookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
    this.handleDownload = this.handleDownload.bind(this);
  }
  handleDownload = () => {
    console.log(this.state.book);
  };

  componentDidMount() {
    this.setState({
      book: this.props.location.state.product.volumeInfo,
    });
    console.log(this.state.book);
  }

  render() {
    return (
      <div className="container2">
        <div className="card-image">
          <img
            src={
              this.state.book && this.state.book.imageLinks
                ? this.state.book.imageLinks.thumbnail
                : "assets/images/thebook.png"
            }
            alt="itm"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="card-right">
          <h5 className="item-title">
            {" "}
            {this.state.book && this.state.book.title
              ? this.state.book.title
              : "No Title"}
          </h5>
          <p className="small text-muted font-italic">
            Author:{" "}
            {this.state.book &&
            this.state.book.authors &&
            this.state.book.authors.length > 0
              ? this.state.book.authors[0]
              : "No author"}
          </p>
          <p className="item-desc">
            Description:
            {this.state.book && this.state.book.description
              ? this.state.book.description.substring(0, 600)
              : "No Description"}
            {this.state.book &&
            this.state.book.description &&
            this.state.book.description.length > 600
              ? ".."
              : ""}
          </p>
          <br></br>

          <p className="item-desc">
            Categories:
            {this.state.book && this.state.book.description
              ? this.state.book.description.substring(0, 600)
              : "No Description"}
            {this.state.book &&
            this.state.book.description &&
            this.state.book.description.length > 600
              ? ".."
              : ""}
          </p>
          <br></br>
          <button className="btn-add" onClick={this.handleDownload}>
            <b>Download PDF</b>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(bookDetails);
