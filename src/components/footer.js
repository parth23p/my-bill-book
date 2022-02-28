import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Whatsapp, Chat } from "react-bootstrap-icons";
import "./footer.css";
const footer = () => {
  return (
    <Container>
      <Row md={12} className="footer-container">
        <Col xs={4}>
          <h5 style={{ color: "#ef7338" }}>
            <b>Get in touch</b>
          </h5>
          <br />
          <p>help@flobiz.in</p>
          <h5>+91 74004 17400</h5>
          <div className="d-flex mx-auto">
            <div className="d-flex">
              <Button className="WhatsApp">
                <Whatsapp size={16} color="green" />
                <span> Whatsapp us</span>
              </Button>
            </div>
            <div className="d-flex mx-2">
              <Button className="Chat">
                <Chat size={16} color="blue" />
                <span> Chat with us</span>
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={2}>
          <h5 style={{ color: "#ef7338" }}>
            <b>Information</b>
          </h5>
          <br />
          <h6>Refund Policy</h6>
          <h6 style={{ color: "#ef7338" }}>Privacy Policy</h6>
          <h6>Terms & Conditions</h6>
        </Col>
        <Col xs={2}>
          <br />
          <br />
          <h6>FAQ's</h6>
          <h6>Pricing</h6>
          <h6>Flobiz Business Group</h6>
          <h6>Blogs</h6>
        </Col>
        <Col xs={3}>
          <h5 style={{ color: "#ef7338" }}>
            <b>Follow Us</b>
          </h5>
          <div className="d-flex ">
            <div className="d-flex social-media">
              <a
                className="link"
                href="https://www.youtube.com/channel/UCSGJlHTQCdQS_OGxCk6xJsw"
              >
                <img
                  style={{ width: "20px", height: "14px" }}
                  src="https://mybillbook.in/static-assets/images/landing-page/youtube.webp"
                />
              </a>
            </div>
            <div className="d-flex social-media">
              <a className="link" href="https://www.facebook.com/mybillbook.in">
                <img
                  style={{ width: "9px", height: "16px" }}
                  src="https://mybillbook.in/static-assets/images/landing-page/facebook_Icon.webp"
                />
              </a>
            </div>
            <div className="d-flex social-media">
              <a
                className="link"
                href="https://www.instagram.com/mybillbookofficial/"
              >
                <img
                  style={{ width: "22px", height: "22px" }}
                  src="	https://mybillbook.in/static-assets/images/landing-page/instagram.webp"
                />
              </a>
            </div>
            <div className="d-flex social-media">
              <a
                className="link"
                href="https://www.instagram.com/mybillbookofficial/"
              >
                <img
                  style={{ width: "16px", height: "13px" }}
                  src="https://mybillbook.in/static-assets/images/landing-page/twitter-icon.webp"
                />
              </a>
            </div>
            <div className="d-flex social-media">
              <a className="link" href="https://www.facebook.com/mybillbook.in">
                <img
                  style={{ width: "16px", height: "15px" }}
                  src="	https://mybillbook.in/static-assets/images/landing-page/linkedin-icon.webp"
                />
              </a>
            </div>
          </div>
          <div className="d-flex" style={{ padding: "30px 2px" }}>
            <h6>
              FloBooks is a product by <a href="#">FloBiz</a>
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
