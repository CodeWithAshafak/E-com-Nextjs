import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const First = () => {
  return (
    <>
    <div className='mt-22 rounded-md p-1 m-5' style={{border:"1px solid red"}}>

    
    <Container fluid>
      <Row>
        <Col style={{borderRight:"1px solid red ", display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column"}}>
        <img src="/first/f1.jpg" alt="first" />
        <span>Same Day Delivery</span>
        </Col>

        <Col style={{borderRight:"1px solid red ", display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column"}}>
        <img src="/first/f2.jpg" alt="first" />
        <span>Flower</span>
        </Col>

        <Col style={{borderRight:"1px solid red ", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <img src="/first/f3.jpg" alt="first" />
        <span>Cakes</span>
        </Col>

        <Col style={{borderRight:"1px solid red ", display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column"}}>
        <img src="/first/f4.jpg" alt="first" />
        <span>Personalized</span>
        </Col>

        <Col style={{borderRight:"1px solid red ", display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column"}}>
        <img src="/first/f6.jpg" alt="first" />
        <span>New Arrivals</span>
        </Col>

        <Col style={{borderRight:"1px solid red ", display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
        <img src="/first/f8.jpg" alt="first" />
        <span>New Arrivals</span>
        </Col>


        <Col style={{borderRight:"1px solid red ", display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column"}}>
        <img src="/first/f6.jpg" alt="first" />
        <span>Plants</span>
        </Col>

        <Col style={{marginLeft:"30px"}} >
        <img src="/first/f7.jpg" alt="first" 
        style={{ marginLeft:"7px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} />
        <span>International</span>
        </Col>

        
      </Row>


    </Container>
    </div>
    
    </>
  )
}

export default First