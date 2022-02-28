import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CheckAll, Check } from "react-bootstrap-icons";
import "./information.css";
const information = () => {
  return (
    <Container>
      <div className="d-flex align-items-center stats">
        <div>
          <h3 style={{ color: "#ef7338" }}>
            <b>1,00,000+</b>
          </h3>
          <h6>Businesses Trust us</h6>
        </div>
        <div>
          <h3 style={{ color: "#ef7338" }}>
            <b>30,00,000</b>
          </h3>
          <h6>Invoices Created</h6>
        </div>
        <div>
          <h3 style={{ color: "#ef7338" }}>
            <b>5,000+</b>
          </h3>
          <h6>Cities & Towns in India</h6>
        </div>
        <div>
          <h3 style={{ color: "#ef7338" }}>
            <b>4.5</b>
            <span style={{ marginLeft: "10px" }}>
              <img
                className="ml-3"
                src="https://mybillbook.in/static-assets/images/landing-page/star.webp"
              />
            </span>
          </h3>
          <h6>Businesses Trust us</h6>
        </div>
      </div>
      <Row style={{ padding: "60px 15px" }}>
        <Col>
          <div>
            <h2 style={{ textAlign: "left" }}>
              Now try all Benefits of My BillBook App
            </h2>
            <h3 style={{ color: "#ef7338", textAlign: "left" }}>
              <b>Free for 14 Days</b>
            </h3>
          </div>
        </Col>
        <Col xs lg="3">
          <h2>Money Back 30 Days Guranteed</h2>
        </Col>
      </Row>
      <Row md={3} className="g-4" style={{ padding: "20px 15px" }}>
        <Col
          style={{
            borderRadius: "4px",
            padding: "20px 15px",
          }}
        >
          <Card style={{ height: "25rem" }}>
            <img
              className="plan-image"
              variant="top"
              src="https://mybillbook.in/static-assets/images/pricing%20page/bluecrown.svg"
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <b> Silver plan</b>
                <p className="d-flex justif-content-center pricing-line">
                  <span className=" text-checked">₹ 1299</span>
                  <span
                    className="d-flex"
                    style={{ color: "rgb(48, 48, 216)" }}
                  >
                    <h4>
                      <b> ₹ 799</b>
                    </h4>
                    <span style={{ fontSize: "small", padding: "7px 2px" }}>
                      /year
                    </span>
                  </span>
                </p>
              </Card.Title>
              <Container className="justify-content-center desktop-mobile-silver">
                <div className="d-flex justify-content-center">
                  <img
                    style={{ height: "26px", padding: "4px" }}
                    src="https://mybillbook.in/static-assets/images/landing-page/onlineorder.webp"
                  />
                  <h6 style={{ color: "rgb(48, 48, 216)", padding: "4px" }}>
                    <b>Mobile+Desktop</b>
                  </h6>
                </div>
              </Container>
              <Card.Text style={{ padding: "20px 0px", textAlign: "left" }}>
                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>Unlimited Stock Adjustments</h6>
                </div>
                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>GST Reports, Profit & Loss Reports.</h6>
                </div>

                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>Remove My BillBook logo from invoice</h6>
                </div>
                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>Only Mobile device supported</h6>
                </div>
                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>+5 more features</h6>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          style={{
            borderRadius: "4px",
            padding: "20px 15px",
          }}
        >
          <Card
            style={{
              height: "25rem",
              borderColor: "#ef7338",
              backgroundColor: "rgb(255, 243, 227,0.2)",
            }}
          >
            <img
              className="plan-image"
              variant="top"
              src="https://mybillbook.in/static-assets/images/pricing%20page/goldencrown.svg"
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <b> Golden plan</b>
                <p className="d-flex justif-content-center pricing-line">
                  <span className=" text-checked">₹ 2599</span>
                  <span className="d-flex" style={{ color: "#ef7338" }}>
                    <h4>
                      <b> ₹ 1799</b>
                    </h4>
                    <span style={{ fontSize: "small", padding: "7px 2px" }}>
                      /year
                    </span>
                  </span>
                </p>
              </Card.Title>
              <Container className="justify-content-center desktop-mobile-diamond">
                <div className="d-flex justify-content-center">
                  <img
                    style={{ height: "26px", padding: "4px" }}
                    src="https://mybillbook.in/static-assets/images/landing-page/onlineorder.webp"
                  />
                  <h6 style={{ color: "#ef7338", padding: "4px" }}>
                    <b>Mobile+Desktop</b>
                  </h6>
                </div>
              </Container>
              <Card.Text style={{ padding: "20px 0px", textAlign: "left" }}>
                <div className="d-flex">
                  <CheckAll color="green" size={20} />
                  <h6>All Silver features.</h6>
                </div>
                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>
                    Add <b>upto 5 staff members</b> to My BillBook
                  </h6>
                </div>
                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>Unlimited Mobile+Desktop Logins</h6>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          style={{
            borderRadius: "4px",
            padding: "20px 15px",
          }}
        >
          <Card style={{ height: "25rem" }}>
            <img
              className="plan-image"
              variant="top"
              src="https://mybillbook.in/static-assets/images/pricing%20page/goldencrown.svg"
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <b> Diamond plan</b>
                <p className="d-flex justif-content-center pricing-line">
                  <span className=" text-checked">₹ 4599</span>
                  <span className="d-flex" style={{ color: "#ef7338" }}>
                    <h4>
                      <b> ₹ 3500</b>
                    </h4>
                    <span style={{ fontSize: "small", padding: "7px 2px" }}>
                      /year
                    </span>
                  </span>
                </p>
              </Card.Title>
              <Container className="justify-content-center desktop-mobile-diamond">
                <div className="d-flex justify-content-center">
                  <img
                    style={{ height: "26px", padding: "4px" }}
                    src="https://mybillbook.in/static-assets/images/landing-page/onlineorder.webp"
                  />
                  <h6 style={{ color: "#ef7338", padding: "4px" }}>
                    <b>Mobile+Desktop</b>
                  </h6>
                </div>
              </Container>
              <Card.Text style={{ padding: "20px 0px" }}>
                <div className="d-flex">
                  <CheckAll color="green" size={20} />
                  <h6>All Gold & Silver features.</h6>
                </div>
                <div className="d-flex">
                  <Check color="green" size={20} />
                  <h6>
                    Add <b>unlimited staff</b> to My BillBook.
                  </h6>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default information;
