'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Giftspark = () => {
  return (
 <>
 <Container fluid className='p-4 mt-2'>

 <h2 className=" mb-5 fw-bold">Gifts that Spark Joy</h2> 
 
  <Row>

    <Col>
    <img src="/giftspark/gs1.jpg" alt="giftspark" />
    </Col>

    <Col>
    <img src="/giftspark/gs2.jpg" alt="giftspark" />
    </Col>

    <Col>
    <img src="/giftspark/gs3.jpg" alt="giftspark" />
    </Col>

    <Col>
    <img src="/giftspark/gs4.jpg" alt="giftspark" />
    </Col>

    <Col>
    <img src="/giftspark/gs6.jpg" alt="giftspark" />
    </Col>

   
  </Row>

 </Container>
 </>
  )
}

export default Giftspark