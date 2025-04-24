"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Samedelivery = () => {
  return (
    <>
      <Container className="p-4 mt-2" fluid>
       <h2 className="mb-5 fw-bold">Same Day Delivery</h2> 
        
        <Row>
          <Col>
            <img src="/samedelivery/sd.jpg" alt="giftspark" />
          </Col>

          <Col>
            <img src="/samedelivery/sd2.jpg" alt="giftspark" />
          </Col>

          <Col>
            <img src="/samedelivery/sd3.jpg" alt="giftspark" />
          </Col>

          <Col>
            <img src="/samedelivery/sd4.jpg" alt="giftspark" />
          </Col>
        </Row>

        <Row>
          <Col>
            <img src="/samedelivery/sd10.jpg" alt="giftspark" />
          </Col>

          <Col>
            <img src="/samedelivery/sd9.jpg" alt="giftspark" />
          </Col>

          <Col>
            <img src="/samedelivery/sd7.jpg" alt="giftspark" />
          </Col>

          <Col>
            <img src="/samedelivery/sd11.jpg" alt="giftspark" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Samedelivery;
