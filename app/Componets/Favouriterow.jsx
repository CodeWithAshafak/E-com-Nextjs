"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Favouriterow = () => {
  return (
    <>

      <div className='p-4 mt-2 gap-2' >

      
      <Container >
        <Row>
          <Col>
            <img src="/fav/f3.jpg" alt="fav"  />
          </Col>

          <Col>
            <img src="/fav/f4.jpg" alt="fav" />
          </Col>

          <Col>
            <img src="/fav/f5.jpg" alt="fav" />
          </Col>

          <Col>
            <img src="/fav/f6.jpg" alt="fav" />
          </Col>
        </Row>
      </Container>

      </div>
    </>
  );
};

export default Favouriterow;
