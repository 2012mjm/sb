import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid className="top">
          <Container>
            <Row>
              <Col xs="3">
                <h3>
                  <Link to="#">راهنمای خرید از سناب</Link>
                </h3>
                <ul>
                  <li>
                    <Link to="#">نحوه ثبت سفارش</Link>
                  </li>
                  <li>
                    <Link to="#">رویه ارسال سفارش</Link>
                  </li>
                </ul>
              </Col>
              <Col xs="3">
                <h3>
                  <Link to="#">خدمات مشتریان</Link>
                </h3>
                <ul>
                  <li>
                    <Link to="#">پاسخ به پرسش‌های متداول</Link>
                  </li>
                  <li>
                    <Link to="#">رویه‌های بازگرداندن کالا</Link>
                  </li>
                  <li>
                    <Link to="#">شرایط استفاده</Link>
                  </li>
                  <li>
                    <Link to="#">حریم خصوصی</Link>
                  </li>
                </ul>
              </Col>
              <Col xs="3">
                <h3>
                  <Link to="#">با سناب</Link>
                </h3>
                <ul>
                  <li>
                    <Link to="#">فروش در سناب</Link>
                  </li>
                  <li>
                    <Link to="#">همکاری با سازمان‌ها</Link>
                  </li>
                  <li>
                    <Link to="#">تماس با سناب</Link>
                  </li>
                  <li>
                    <Link to="#">درباره سناب</Link>
                  </li>
                </ul>
              </Col>
              <Col xs="3">
                <h3>
                  <Link to="#">جستجوی سریع</Link>
                </h3>
                <Form>
                  <InputGroup>
                    <Input placeholder="چیزی تایپ کنید..." />
                    <InputGroupAddon addonType="append">
                      <Button color="info" size="sm">
                        <i className="material-icons">search</i>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="bottom">
          <Container>
            استفاده از مطالب این فروشگاه فقط برای مقاصد غیرتجاری و با ذکر منبع
            بلامانع است. کلیه حقوق این سایت متعلق به ما می‌باشد.
          </Container>
        </Container>
      </footer>
    );
  }
}

export default Footer;
