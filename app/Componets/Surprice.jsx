import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Surprice = () => {
  return (
    <>
      <Container className="mt-4 polaroi p-4">
        

        <h2 className="text-center mb-5 fw-bold"> Surprises for Every Celebration</h2> 

        <Row className="polaroid-row flex w-full justify-between">
          <Col>
            <img src="/s1.jpg" alt="surprice" />
            <p>30 Mins Gifts</p>
          </Col>

          <Col>
            <img src="/s2.jpg" alt="surprice" />
            <p>Birthday Gifts</p>
          </Col>

          <Col>
            <img src="/s3.jpg" alt="surprice" />
            <p>Anniversary Gifts</p>
          </Col>

          <Col>
            <img src="/s4.jpg" alt="surprice" />
            <p>Gifts for Kids</p>
          </Col>

          <Col>
            <img src="/s5.jpg" alt="surprice" />
            <p>House Warming</p>
          </Col>

          <Col>
            <img src="/s6.jpg" alt="surprice" />
            <p>Baloon Decor</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Surprice;
