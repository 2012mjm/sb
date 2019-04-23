import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import SlickSlider from "react-slick";

import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slider extends Component {
  render() {
    const { list } = this.props;
    return (
      <Container>
        <div className="slider">
          <SlickSlider
            infinite
            fade
            slidesToShow={1}
            slidesToScroll={1}
            speed={1500}
            autoplaySpeed={10000}
            autoplay
            nextArrow={
              <div>
                <i className="material-icons">arrow_forward_ios</i>
              </div>
            }
            prevArrow={
              <div>
                <i className="material-icons">arrow_back_ios</i>
              </div>
            }
          >
            {list.map((item, i) => (
              <Link key={i} to={item.link}>
                <img src={item.image} alt="" />
              </Link>
            ))}
          </SlickSlider>
        </div>
      </Container>
    );
  }
}

Slider.propTypes = {
  list: PropTypes.array
};

export default Slider;
