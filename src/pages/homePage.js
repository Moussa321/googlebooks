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
    const productArray = [
      {
        image: "product_1.png",
        title: " Juicy Grapes ",
        price: "$46.00",
        sales: "6%",
      },
      {
        image: "product_2.png",
        title: " Red Watermelon ",
        price: "$56.00",
        sales: "",
      },
      {
        image: "product_3.png",
        title: " Juicy Orange ",
        price: "$46.00",
        sales: "",
      },
      {
        image: "product_4.png",
        title: " Fresh Banana ",
        price: "$46.00",
        sales: "5%",
      },
      {
        image: "product_1.png",
        title: " Juicy Grapes ",
        price: "$46.00",
        sales: "6%",
      },
      {
        image: "product_2.png",
        title: " Red Watermelon ",
        price: "$56.00",
        sales: "",
      },
      {
        image: "product_3.png",
        title: " Juicy Orange ",
        price: "$46.00",
        sales: "",
      },
      {
        image: "product_4.png",
        title: " Fresh Banana ",
        price: "$46.00",
        sales: "5%",
      },
    ];

    const productMap = productArray.map((valu, i) => {
      return (
        <div className="col-md-3 col-sm-12" key={i}>
          <div className="product_wrp">
            <div className="product_img">
              <img src={`assets/images/${valu.image}`} alt="product" />
              <div className="on_sale">
                <span>{valu.sales}</span>
              </div>
            </div>
            <div className="product_info">
              <h4>{valu.title}</h4>
              <ul className="product_rating">
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
              </ul>
              <span className="product_price">{valu.price}</span>
            </div>
            <div className="project_view">
              <Link to="#/">
                <i className="icon-glyph-13"></i>
              </Link>
              <Link to="#/" className="project-link">
                <i className="icon-glyph-52"></i>
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <MetaTags>
          <title>FuodBorne | Single Service</title>
          <meta name="description" content="Organic Food React JS Template." />
        </MetaTags>
        <LayoutOne>
          <div className="shop-page">
            {/*====================  breadcrumb area ====================*/}

            {/* <Breadcrumb title="Our Products" /> */}

            {/*====================  End of breadcrumb area  ====================*/}

            {/*==================== Team Mamber area  ====================*/}

            <section className="product-section">
              <div className="container">
                <div className="row">
                  {productMap}

                  <div className="prodt_pagination">
                    <ul>
                      <li>
                        <Link
                          to={process.env.PUBLIC_URL + "/shop"}
                          className="page_number current"
                        >
                          1
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={process.env.PUBLIC_URL + "/shop"}
                          className="page_number"
                        >
                          2
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={process.env.PUBLIC_URL + "/shop"}
                          className="page_number"
                        >
                          →
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/*====================  End Team Mamber area  ====================*/}
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(homePage);
