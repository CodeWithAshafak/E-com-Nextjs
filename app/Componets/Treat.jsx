import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Treat = () => {
  return (
    <>
    
    <Container fluid className='p-4 mt-2' >
      <h3 className="mb-5 fw-bold">Treat yourself to Celebrations</h3>
      <Row>
        <Col>
        <img src="/grid.png" alt="grid" />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Treat