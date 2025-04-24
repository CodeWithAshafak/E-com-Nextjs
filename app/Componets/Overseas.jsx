import { Col, Container, Row } from "react-bootstrap"

const Overseas = () => {
  return (
    <>
    
    <Container fluid className='p-4 mt-2'>

      <Row>
        <Col>
        <h2 className="text-center mb-5 fw-bold">Send Surprises Overseas</h2>  
        </Col>
      </Row>


      <Row>
        <Col>
         <img src="/overseas/os1.jpg" alt="overseas1" />
        </Col>
        <Col>
        <img src="/overseas/os2.jpg" alt="overseas1" />
        </Col>

      </Row>
    </Container>

    </>
  )
}

export default Overseas