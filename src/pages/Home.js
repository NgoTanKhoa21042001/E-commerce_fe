/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/bach22/image/upload/v1673172973/avatar/He_20Has_20Risen_20Apparel_20logo_daywgm.jpg"
        alt=""
        className="home-banner"
      />
      <div className="featured-products-container container mt-4">
        <h2>Last products</h2>
        {/* last products here */}
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="sale_banner--container mt-4">
        <img
          src="https://res.cloudinary.com/bach22/image/upload/v1671501017/avatar/online-shopping-banner-bags-icons-shop-61959143_ur5dgd.jpg"
          alt=""
        />
      </div>
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category, idx) => (
            <LinkContainer
              key={idx}
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
