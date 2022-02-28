import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import "./body.css";
import axios from "axios";
import Header from "./header";
const Body = () => {
  const [MobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  async function validateMobileNumber(e) {
    setMobileNumber(e.target.value);
  }
  async function handleOtp(e) {
    setOtp(e.target.value);
  }

  //useEffect for sending OTP
  useEffect(async () => {
    console.log(MobileNumber);
    console.log("inside otp function", otp);
    if (MobileNumber.length === 10) {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        client: "web",
        "Access-Control-Allow-Origin": "*",
      };
      const body = {
        mobile_number: MobileNumber,
      };
      await axios
        .post("https://niobooks.in/api/web/request_otp", body, headers)

        .then((data) => {
          console.log(data);
        });
    }
  }, [MobileNumber]);

  async function Login(e) {
    e.preventDefault();
    console.log("Login Clicked!!!");
    if (otp.length === 6 && MobileNumber.length === 10) {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        client: "web",
        "Access-Control-Allow-Origin": "*",
      };
      const body = {
        mobile_number: MobileNumber,
        otp_code: otp,
      };
      await axios
        .post("https://niobooks.in/api/web/authenticate", body, headers)

        .then((data) => {
          console.log(data);
          console.log("User Logged in Successfully with otp");
        });
    } else {
      console.log("check otp length or mobile number length");
    }
  }
  // useEffect for Login
  // useEffect(() => {
  //   Login();
  // }, [MobileNumber, otp]);

  return (
    <div className="container-bg-color" style={{ padding: "15px" }}>
      <Row>
        <Col>
          <Container className="body-container">
            <div>
              <h2 className="container-text-align-left">
                <b>Simple GST Billing</b> & <b>Stock Management</b>
              </h2>
              <h3 className="container-text-align-left">
                Software for your Business
              </h3>
              <h5
                className="container-text-align-left"
                style={{ color: "rgb(56,56,56)" }}
              >
                <b>Atma Nirbhar Vyapari bane</b>
              </h5>
            </div>
            <div className="position-absolute">
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="container-text-align-left">
                    Made with ❤️ in India
                  </h5>
                </div>
                <div className="d-flex align-items-center ml-5">
                  <img
                    style={{ height: "20px", margin: "auto 20px" }}
                    src="	https://mybillbook.in/static-assets/images/landing-page/iso-black.webp"
                    alt="iso certified"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Col>
        <Col xs lg="4" style={{ padding: "15px" }}>
          <Card style={{ width: "25rem", height: "27rem", padding: "15px" }}>
            <h5 className="align-left">Login to My BillBook</h5>
            <Card.Body>
              <Form>
                <h6 style={{ textAlign: "left" }} className="text-secondary">
                  <b> Enter Mobile Number</b>
                </h6>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>

                  <FormControl
                    type="tel"
                    placeholder="Mobile Number"
                    aria-label="Mobile Number"
                    aria-describedby="basic-addon1"
                    value={MobileNumber}
                    onChange={(e) => {
                      validateMobileNumber(e);
                    }}
                  />
                </InputGroup>
                <h6 style={{ textAlign: "left" }} className="text-secondary">
                  <b>Enter OTP</b>
                </h6>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="One Time Password"
                    onChange={(e) => {
                      handleOtp(e);
                    }}
                  />
                  <h6
                    className="text-secondary"
                    style={{ textAlign: "left", padding: "12px 0px" }}
                  >
                    Resend OTP in <b>00:59</b> Seconds
                  </h6>
                </Form.Group>
                <Form.Group className="d-grid gap-2">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    // disabled={
                    //   otp.length !== 6 ||
                    //   otp.length === "" ||
                    //   MobileNumber.length !== 10 ||
                    //   MobileNumber === ""
                    //     ? true
                    //     : false
                    // }
                    onClick={(e) => {
                      Login(e);
                    }}
                  >
                    Login
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Body;
