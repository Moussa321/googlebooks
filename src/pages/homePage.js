import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as booksActions from "../store/actions/books";
import { connect } from "react-redux";
import bookDetails from "./bookDetails";

const mapDispatchToProps = (dispatch, getState) => {
  return {
    books: (author, index) =>
      dispatch(booksActions.getBooksByAuthor(author, index)),
  };
};

const BookCard = (book) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 p-2">
      <div className="card rounded shadow border-0">
        <Link
          to={{
            pathname: `/book/${book.product.id}`,
            state: book,
          }}
        >
          <div className="card-body p-4">
            <div class="image1">
              <img
                src={
                  book.product.volumeInfo.imageLinks
                    ? book.product.volumeInfo.imageLinks.thumbnail
                    : "assets/images/thebook.png"
                }
                alt=""
                className="image2 img-fluid d-block mx-auto mb-3"
              />
            </div>
            <h5>{book.product.volumeInfo.title.substring(0, 22)}</h5>
            <p className="small text-muted font-italic">
              Author:{" "}
              {book.product.volumeInfo.authors &&
              book.product.volumeInfo.authors.length > 0
                ? book.product.volumeInfo.authors[0].substring(0, 22)
                : "No author"}
            </p>
            <p className="small text-muted font-italic">
              Published:{" "}
              {book.product.volumeInfo.publishedDate
                ? book.product.volumeInfo.publishedDate
                : "No publishe Date"}
            </p>
            <ul className="list-inline small">
              {/* {book.rating.map((book) => (
              <li className="list-inline-item m-0">
                <i className="fa fa-star text-success"></i>
              </li>
            ))} */}
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};
class homePage extends Component {
  constructor() {
    super();

    this.state = {
      books: null,
      searchValue: "",
      notFoundMessage: "Welcome to Google Books Api",
      startAt: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
  }
  async handleChange(event) {
    let author = event.target.value;
    let index = this.state.startAt;
    try {
      let booksApi = await this.props.books(author, index);

      this.setState({
        books: booksApi.items,
        notFoundMessage: "Author Not Found",
        searchValue: author,
      });
      console.log(booksApi.items);
    } catch (err) {
      console.log(err);
    }
  }
  async handleNextPage(event) {
    let author = this.state.searchValue;
    let nextIndex = parseInt(this.state.startAt) + parseInt(20);
    try {
      let booksApi = await this.props.books(author, nextIndex);

      this.setState({
        books: booksApi.items,
        startAt: nextIndex,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async handlePreviousPage(event) {
    let author = this.state.searchValue;
    let nextIndex = parseInt(this.state.startAt) - parseInt(20);
    try {
      let booksApi = await this.props.books(author, nextIndex);

      this.setState({
        books: booksApi.items,
        startAt: nextIndex,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search Books by Author..."
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row pb-5 mb-4">
            {this.state.books != null && this.state.books.length > 0 ? (
              this.state.books.map((book) => (
                <BookCard product={book} key={book.id} />
              ))
            ) : (
              <div className="notFound">
                <h1>{this.state.notFoundMessage}</h1>
              </div>
            )}
            <div className="prodt_pagination">
              <ul>
                {this.state.startAt > 0 ? (
                  <li>
                    <button
                      className="button1 buttonDark buttonRound"
                      onClick={this.handlePreviousPage}
                    >
                      ←
                    </button>
                  </li>
                ) : (
                  ""
                )}
                {this.state.books && this.state.books.length >= 20 ? (
                  <li>
                    <button
                      className="button1 buttonDark buttonRound"
                      onClick={this.handleNextPage}
                    >
                      →
                    </button>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(homePage);
