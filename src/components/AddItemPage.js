import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Table,
  Form,
} from "react-bootstrap";
// import ChevronExpand from "react-bootstrap-icons";
import "./addItemPage.css";

const AddItemPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "1px",
          border: "0.1px solid rgba(0,0,0,0.05)",
        }}
      ></div>
      <Row className="m-auto p-auto">
        <Col className="m-auto p-auto" xs={6} style={{ textAlign: "left" }}>
          <h6 style={{ padding: "4px" }}>
            <b>9658545556</b>
          </h6>
        </Col>
        <Col xs={6} className="m-auto p-auto" style={{ textAlign: "right" }}>
          <h6 style={{ padding: "4px" }}>
            <b>Logout</b>
          </h6>
        </Col>
      </Row>
      <div
        style={{
          width: "100%",
          height: "1px",
          border: "0.1px solid rgba(0,0,0,0.05)",
        }}
      ></div>
      <Row>
        <Col xs={8}>
          <h6 style={{ textAlign: "left", margin: "8px 5px" }}>
            <b>Items</b>
          </h6>
        </Col>
        <Col
          xs={4}
          style={{
            textAlign: "left",
            borderLeft: "1px solid rgba(0,0,0,0.5)",
          }}
        >
          <h6 style={{ margin: "8px 5px" }}>
            <b>Create/Edit Items</b>
          </h6>
        </Col>
      </Row>
      <div
        style={{
          // width: "100%",
          height: "1px",
          border: "0.1px solid rgba(0,0,0,0.5)",
        }}
      ></div>
      <Row style={{ height: "558px" }}>
        <Col xs={8}>
          <Container className="search-item-table">
            <InputGroup className="mb-1" style={{ width: "20rem" }}>
              <Button
                variant="outline-secondary"
                id="button-addon1"
                disabled
                style={{ borderRight: "none", borderColor: "rgba(0,0,0,0.5)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
              <FormControl
                style={{ borderLeft: "none", borderColor: "rgba(0,0,0,0.4)" }}
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Searh Items"
              />
            </InputGroup>
            <div style={{ padding: "20px 0px" }}>
              <Table
                hover
                responsive
                style={{ border: "1px solid rgba(0,0,0,0.05)" }}
              >
                <thead>
                  <tr>
                    <th className="mr-2">
                      Item Name
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-expand"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
                        />
                      </svg>
                    </th>
                    <th>Item Code</th>
                    <th>Selling Price</th>
                    <th>Purchase Price</th>
                    <th>Unit</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XYZ Stroy Book</td>
                    <td>BK 12345</td>
                    <td>₹ 1,500</td>
                    <td>₹ 1,200</td>
                    <td>PCS</td>
                    <td>22/02/2022</td>
                  </tr>
                  <tr>
                    <td>As A man Thinketh</td>
                    <td>BK 12346</td>
                    <td>₹ 500</td>
                    <td>₹ 480</td>
                    <td>PCS</td>
                    <td>05/12/2021</td>
                  </tr>
                  <tr>
                    <td>Mark Manson</td>
                    <td>BK 12347</td>
                    <td>₹ 700</td>
                    <td>₹ 562</td>
                    <td>PCS</td>
                    <td>22/02/2022</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
        <Col xs={4} style={{ borderLeft: "1px solid black" }}>
          <Container>
            <div className="d-flex justify-content-center">
              <div className="input-lables">
                <Form.Group className="mb-1" controlId="formBasicItemName">
                  <Form.Label>Item Name * </Form.Label>
                  <Form.Control type="text" placeholder="Enter Item Name" />
                </Form.Group>
              </div>

              <div className=" input-lables">
                <Form.Group className="mb-1" controlId="formBasicItemCode">
                  <Form.Label>Item Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Item Code" />
                </Form.Group>
              </div>
            </div>
          </Container>
          <div className="optional-section-label">
            Stock & Pricing Details (Optional)
          </div>

          <Container>
            <div className="d-flex justify-content-center ">
              <div className=" input-lables">
                <Form.Group className="mb-1" controlId="formBasicSalesPrice">
                  <Form.Label>Sales Price </Form.Label>
                  <Form.Control type="text" placeholder="₹ 0" />
                </Form.Group>
              </div>

              <div className=" input-lables">
                <Form.Group className="mb-1" controlId="formBasicPurchasePrice">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control type="text" placeholder="₹ 0" />
                </Form.Group>
              </div>
            </div>
          </Container>
          <Container>
            <div className="d-flex justify-content-center ">
              <div className=" input-lables ">
                <Form.Label>Measuring Unit</Form.Label>
                <Form.Control
                  type="text"
                  list="Measuring_Units"
                  placeholder="Measuring Unit"
                />
                <datalist id="Measuring_Units">
                  <option>pcs</option>
                  <option>boxes</option>
                  <option>gms</option>
                  <option>ltr</option>
                </datalist>
              </div>

              <div className="input-lables">
                <Form.Group className="mb-1" controlId="formBasicPurchasePrice">
                  <Form.Label>Opening Stock Date</Form.Label>
                  <Form.Control type="date" placeholder="Select Date" />
                </Form.Group>
              </div>
            </div>
          </Container>
          <Container className="mb-3 d-grid ap-2">
            <Button
              size="lg"
              style={{ color: "white", backgroundColor: "darkBlue" }}
            >
              Save
            </Button>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
export default AddItemPage;
