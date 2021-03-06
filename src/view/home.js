import React from "react";
import HeaderSection from "../components/header";
import FooterSection from "../components/footer";
import Carousel from 'react-bootstrap/Carousel';
import ProductComponent from "../components/product";


const HomePage = () => {                   //functional component
  return (
    <div>
      
      <Carousel fade>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide2.png")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide3.png")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide4.png")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/h4-slide7.png")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <div class="maincontent-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="latest-product">
                <h2 class="section-title">Latest Products</h2>
                <div class="product-carousel">
                  <ProductComponent></ProductComponent>

                  <ProductComponent></ProductComponent>

                  <ProductComponent></ProductComponent>

                  <ProductComponent></ProductComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="promo-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo1">
                <i class="fa fa-refresh"></i>
                <p>30 Days return</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo2">
                <i class="fa fa-truck"></i>
                <p>Free shipping</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo3">
                <i class="fa fa-lock"></i>
                <p>Secure payments</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-promo promo4">
                <i class="fa fa-gift"></i>
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-widget-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Top Sellers</h2>
                <a href="" class="wid-view-more">
                  View All
                </a>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-1.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony Smart TV - 2015</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-2.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Apple new mac book 2015</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-3.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Apple new i phone 6</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Recently Viewed</h2>
                <a href="#" class="wid-view-more">
                  View All
                </a>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-4.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony playstation microsoft</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-1.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony Smart Air Condtion</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-2.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Samsung gallaxy note 4</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-product-widget">
                <h2 class="product-wid-title">Top New</h2>
                <a href="#" class="wid-view-more">
                  View All
                </a>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-3.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Apple new i phone 6</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-4.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Samsung gallaxy note 4</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div class="single-wid-product">
                  <a href="single-product.html">
                    <img
                      src="img/product-thumb-1.jpg"
                      alt=""
                      class="product-thumb"
                    />
                  </a>
                  <h2>
                    <a href="single-product.html">Sony playstation microsoft</a>
                  </h2>
                  <div class="product-wid-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product-wid-price">
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <FooterSection></FooterSection>
    </div>
  )
}


export default HomePage;
