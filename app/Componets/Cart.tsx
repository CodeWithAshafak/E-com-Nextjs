"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { cartdisplay } from "../actions/cartdisplay";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {add} from '../redux/cartSlice'

export default function Cart() {

  const dispatch=useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await cartdisplay();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <img
          src="/loader/loader.gif"
          alt="Loading..."
          width="200"
          height="200"
        />
      </div>
    );

  if (error)
    return (
      <p className="text-center text-danger mt-5">Error: {error.message}</p>
    );

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h3 className="text-center">Best Selling Gifts</h3>
        </Col>
      </Row>
      <Row className="mt-3">
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title className="text-gray-500">
                  {product.proname}
                </Card.Title>

                <Card.Text className="flex">
                  <strong>Price: ₹ </strong>
                  {product.price}
                </Card.Text>

                <button
                  className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all
                       duration-300"
                  onClick={() => dispatch(add({ ...product, quantity: 1 }))}
                >
                  Add to Cart
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
