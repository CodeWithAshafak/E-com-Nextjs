'use client' // Only if you're using Next.js with app directory (optional based on setup)

import { Col, Container, Row } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <section className="bg-white py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Testimonials</h2>
        <Row className="text-center">
          <Col md={4}>
            <div className="p-3">
              <div className="fs-1 mb-3">❝</div>
              <p>
                <em>“We loved this shop”</em> They have so many awesome-looking toys and games! The staff is very friendly and helped me find just what I was looking for. Thank you, Sardar Ji
              </p>
              <p className="fw-semibold mt-3">- Deepesh Garg</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3">
              <div className="fs-1 mb-3">❝</div>
              <p>
                Awesome place to buy reasonable and good quality products and gifts.. very good and cooperative staff..
              </p>
              <p className="fw-semibold mt-3">- Alisha Arora</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3">
              <div className="fs-1 mb-3">❝</div>
              <p>
                Best gift shop in this area. Awesome collection of gifts and other items. Affordable prices. A good place to buy gifts for all occasions ..
              </p>
              <p className="fw-semibold mt-3">- Gurmukh Singh</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
