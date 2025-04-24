import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Personalized = () => {
  return (
    <>
      <Container fluid className='p-4 mt-2'>
      
          <h3 className=" mb-5 fw-bold">
            Personalized to Perfection
          </h3>
          {/* <p>Unique Treasures that Echo Emotions</p> */}
       
        <Row>
          <Col>
            <img src="/personalized/p1.jpg" alt="personalized" />
            <p>HAMPERS</p>
          </Col>

          <Col>
          <img src="/personalized/p2.jpg" alt="personalized" />
            <p>PHOTO GIFTS</p>
          </Col>

          <Col>
          <img src="/personalized/p3.jpg" alt="personalized" />
            <p>NAME GIFTS</p>
          </Col>

          <Col>
          <img src="/personalized/p4.jpg" alt="personalized" />
            <p>FASHION</p>
          </Col>

          <Col>
          <img src="/personalized/p5.jpg" alt="personalized" />
            <p>HOME & LIVING</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Personalized;
