import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as booksActions from "../store/actions/books";
import { connect } from "react-redux";
import bookDetails from "./bookDetails";

const mapDispatchToProps = (dispatch, getState) => {
  return {
    books: (author) => dispatch(booksActions.getBooksByAuthor(author)),
  };
};

const BookCard = (book) => {
  console.log(book.product.volumeInfo);
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 p-2">
      <div className="card rounded shadow-sm border-0">
        <div className="card-body p-4">
          <img
            src={
              book.product.volumeInfo.imageLinks
                ? book.product.volumeInfo.imageLinks.thumbnail
                : "assets/images/thebook.png"
            }
            alt=""
            className="img-fluid d-block mx-auto mb-3"
          />
          <h5>
            <Link
              to={{
                pathname: `/book/${book.product.id}`,
                state: book,
              }}
            >
              {book.product.volumeInfo.title.substring(0, 22)}
            </Link>
          </h5>
          <p className="small text-muted font-italic">
            Author:{" "}
            {book.product.volumeInfo.authors &&
            book.product.volumeInfo.authors.length > 0
              ? book.product.volumeInfo.authors[0]
              : "No author"}
          </p>
          <p className="small text-muted font-italic">
            Published:{" "}
            {book.product.volumeInfo.publishedDate
              ? book.product.volumeInfo.publishedDate
              : "No publishe Date"}
          </p>
          <ul className="list-inline small">
            {/* {book.map((book) => (
              <li className="list-inline-item m-0">
                <i className="fa fa-star text-success"></i>
              </li>
            ))} */}
          </ul>
        </div>
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
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(event) {
    let author = event.target.value;
    try {
      let booksApi = await this.props.books(author);

      this.setState({
        books: booksApi.items,
        notFoundMessage: "Author Not Found",
      });
      console.log(this.state.books);
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
          </div>
        </div>
        </div>
   
    );
  }
}

export default connect(null, mapDispatchToProps)(homePage);
