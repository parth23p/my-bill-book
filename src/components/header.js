import React from "react";
import { Nav, Container, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// ,Brand,Toggle,Collapse,Link,Item,Devider
import "./header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://mybillbook.in/static-assets/images/mybillbook-logo.webp"
            alt="myBillBook"
          />
        </Navbar.Brand>
        <div
          className="d-flex justify-content-center"
          style={{
            marginRight: "-100px",
          }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <div href="#" className="blackText justify-content-end">
                Why Use My BillBook?
              </div>
              <div className="blackText">Who Is It For?</div>

              <div className="blackText">Online Store</div>

              <div className="blackText">Pricing</div>
              <div className="blackText">FAQs</div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};
export default Header;
