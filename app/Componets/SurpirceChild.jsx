import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SurpirceChild = () => {
  return (
 <>
 <Container  className='p-4 mt-2'  fluid>
  <h2 className=" mb-5 fw-bold">Surprises For Little Ones</h2>
  <Row>

  <Col>
  <img src="/surpricechild/sc1.jpg" alt="child" />
  </Col>

  <Col>
  <img src="/surpricechild/sc2.jpg" alt="child" />
  </Col>
 

  </Row>
  
 </Container>
 </>
  )
}

export default SurpirceChild