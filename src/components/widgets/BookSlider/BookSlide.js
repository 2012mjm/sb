import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class BookSlide extends Component {
  render() {
    const { image, title, author, category, link } = this.props;
    return (
      <Link className="book-box" to={link}>
        <img src={image} alt="" />
        <h3 className="title">{title}</h3>
        <p className="author">
          <i className="material-icons text-sub">edit</i> {author}
        </p>
        <p className="category">
          <i className="material-icons text-sub">format_align_justify</i>{" "}
          {category}
        </p>
      </Link>
    );
  }
}

BookSlide.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  link: PropTypes.string
};

export default BookSlide;
