"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import {
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import Login from "./Login";

const Header = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(true);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const product = useSelector((state) => state.addtocart.cart);
  const prolen = product.length;
  const user = useUser();
  console.log("user", user);
  console.log("Number of products in cart:", prolen);

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        className="bg-white shadow-sm px-3 py-2 mb-20"
        fixed="top"
      >
        <Container fluid>
          <div className="flex items-center gap-2">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              <GiHamburgerMenu size={24} />
            </Navbar.Toggle>
            <GiHamburgerMenu size={24} className="lg:block hidden" />
            <Link href="/" className="ms-3"> 
          
              <img src="/logo.jpg" alt="logo" className="w-20 h-10" />
            </Link>
          </div>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="w-100 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-3 mt-3 lg:mt-0">
              <Form className="w-full lg:w-1/2 ">
                <Form.Control
                  type="search"
                  placeholder="Search for gifts"
                  className="rounded-pill px-3 w-full"
                />
              </Form>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="warning"
                  className="rounded-pill text-white text-sm fw-bold"
                >
                  Get Select
                </Button>

                {/* <FaCalendarAlt size={20} />
                <FaRupeeSign size={20} /> */}



                <FaHeart size={20} />

                <div className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => router.push('/pages/reduxcart')}
                  >
                    <FaShoppingCart size={20} className="mr-2" />
                    <span className="text-sm font-medium">Cart</span>
                    <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 bg-indigo-600 rounded-full">
                      {prolen}
                    </span>
                  </button>
                </div>

              
                <div>






                  <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                  </SignedOut>
                  
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>

                {/* <IoIosLogIn  size={24} onClick={handleShow} /> */}
                {/* <FaUserCircle /> */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className="custom-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>

      <div>
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </>
  );
};

export default Header;
