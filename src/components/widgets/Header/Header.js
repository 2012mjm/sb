import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="main-top">
        <Container>
          <header>
            <Row>
              <Col xs="5">لوگو سناب</Col>
              <Col xs="5">
                <Form className="search-box">
                  <Input
                    className="search-input"
                    placeholder="چیزی تایپ کنید..."
                  />
                  <Button color="link" className="search-button">
                    <i className="material-icons">search</i>
                  </Button>
                </Form>
              </Col>
              <Col xs="2">
                <Button color="link" size="sm" className="login-link">
                  <i className="material-icons text-sub">lock_open</i> ورود
                </Button>
                <Button color="info" size="sm" className="signup-link">
                  <i className="material-icons text-sub">lock_outline</i> ثبت
                  نام
                </Button>
              </Col>
            </Row>
          </header>
        </Container>

        <Container fluid className="menu-top">
          <Container>
            <Navbar>
              <Nav>
                <NavItem>
                  <NavLink href="#">خانه</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="active" href="#">
                    انتشارات
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">درباره سناب</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">تماس با سناب</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Header;
