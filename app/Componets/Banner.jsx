'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <>

    <div className='mt-10'>
    <Container fluid className='mt-5'>

      <Row>
        <Col>

        <img src="/banner/banner.jpg" alt="banner" className='rounded-4xl' />
        </Col>
      </Row>
    </Container>

    </div>
    
    </>
  )
}

export default Banner
