'use client'

import { Col, Container, Row } from "react-bootstrap"

const Favourite = () => {
  return (
    <>
     <Container className="mt-2 p-5" fluid >
     
      <h2 className=" mb-5 fw-bold">Your Favourite Picks</h2> 
       <Row>

        <Col>
        <img src="/fav/f1.jpg" alt="fav" className="w-100" />
        
        </Col>
        <Col>
        <img src="/fav/f2.jpg" alt="fav"  className="w-100"/>
        
        </Col>
       </Row>

       
     </Container>

    </>
  )
}

export default Favourite