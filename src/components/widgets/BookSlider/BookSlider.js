import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";

import "./BookSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BookSlide from "./BookSlide";

class BookSlider extends Component {
  render() {
    const { title, list, moreOnClick } = this.props;
    return (
      <Container>
        <div className="book-slider">
          <Row className="header">
            <Col xs="6">
              <h2 className="title">{title}</h2>
            </Col>
            <Col xs="6" className="text-right">
              <Button
                outline
                color="info"
                size="sm"
                className="more blur"
                onClick={moreOnClick}
              >
                مشاهده همه
              </Button>
            </Col>
          </Row>

          <Slider
            rtl
            infinite
            slidesToShow={5}
            initialSlide={6 - (list.length - 3)}
            slidesToScroll={1}
            nextArrow={
              <div><i className="material-icons">arrow_forward_ios</i></div>
            }
            prevArrow={
              <div><i className="material-icons">arrow_back_ios</i></div>
            }
          >
            {list.map((item, i) => (
              <BookSlide
                image={item.image}
                title={item.title}
                author={item.author}
                category={item.category}
                link={item.link}
                key={i}
              />
            ))}
          </Slider>
        </div>
      </Container>
    );
  }
}

BookSlider.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  moreClick: PropTypes.func
};

export default BookSlider;
