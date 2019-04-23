import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Book.css";

import book1 from "../Main/images/02.jpeg";

class BookScreen extends Component {
  state = {
    title: "",
    image: "",
    author: ""
  };
  getData(id) {
    // axios
    this.setState({
      title: "هری پاتر",
      image: book1,
      author: "جی.کی. رولینگ"
    });
  }
  componentDidMount() {
    this.getData(this.props.match.params.id);
  }
  render() {
    const { title, image, author } = this.state;
    return (
      <Container className="book-screen">
        <Row>
          <Col xs={9} className="info">
            <Row>
              <Col xs={3} className="main-image">
                <img src={image} alt="" />
              </Col>
              <Col xs={9} className="details">
                <h2 className="title">{title}</h2>
                <p className="author">
                  <i className="material-icons text-sub">edit</i> <span>نویسنده:</span> {author}
                </p>
                <p className="category">
                  <i className="material-icons text-sub">edit</i> <span>نویسنده:</span> {author}
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={3}>a</Col>
        </Row>
      </Container>
    );
  }
}

export default BookScreen;
