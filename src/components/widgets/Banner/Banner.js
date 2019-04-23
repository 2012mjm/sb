import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import "./Banner.css";

import journal1 from "../../Main/images/01.jpeg";
import journal3 from "../../Main/images/03.jpeg";
import journal4 from "../../Main/images/04.jpg";

class Banner extends Component {
  render() {
    return (
      <Container>
        <Row className="banners">
          <Col xs="4">
            <Row className="banner-right">
              <Col xs="6" className="banner-image-box">
                <img src={journal1} alt="" />
              </Col>
              <Col xs="6">
                <h3 className="title">نشریه محک</h3>
                <p className="author">بسیج</p>
                <Button
                  color="danger"
                  outline
                  size="sm"
                  className="banner-link"
                >
                  مشاهده{" "}
                  <i className="material-icons text-sub">arrow_back_ios</i>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs="4">
            <Row className="banner-center">
              <Col xs="6" className="banner-image-box">
                <img src={journal4} alt="" />
              </Col>
              <Col xs="6">
                <h3 className="title">فانوس</h3>
                <p className="author">صنعت سبز</p>
                <Button
                  size="sm"
                  outline
                  className="btn-outline-purple banner-link"
                >
                  مشاهده{" "}
                  <i className="material-icons text-sub">arrow_back_ios</i>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs="4">
            <Row className="banner-left">
              <Col xs="6" className="banner-image-box">
                <img src={journal3} alt="" />
              </Col>
              <Col xs="6">
                <h3 className="title">طرح نو</h3>
                <p className="author">بسیج دانشجویی</p>
                <Button color="info" outline size="sm" className="banner-link">
                  مشاهده{" "}
                  <i className="material-icons text-sub">arrow_back_ios</i>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Banner;
