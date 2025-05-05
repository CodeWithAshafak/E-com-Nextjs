"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "animate.css";
import { FiLogIn } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

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

const Header = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const user = useUser();
  const [expanded, setExpanded] = useState(true);
  const product = useSelector((state) => state.addtocart.cart);
  const prolen = product.length;
  const favouriteProducts = useSelector((state) => state.addtofav.fav);
  const favlen = favouriteProducts.length;
  console.log("user", user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        className=" bg-transparent shadow-sm px-3 py-2 mb-20 backdrop-blur-lg"
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
            <Nav className="ms-auto flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-3 mt-3 lg:mt-0">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="warning"
                  className="rounded-pill text-white text-sm fw-bold"
                >
                  Get Select
                </Button>

                <div className="flex items-center gap-4">
                  <div className="relative flex items-center">
                    <FaHeart
                      size={20}
                      onClick={() => router.push("/pages/favcart")}
                      className="cursor-pointer text-pink-500 hover:text-pink-600 transition-colors duration-300"
                    />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1.5">
                      {favlen}
                    </span>
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-md hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                      onClick={() => router.push("/pages/reduxcart")}
                    >
                      <FaShoppingCart size={20} className="mr-2 text-white" />
                      <span className="relative">
                        Cart
                        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                          {prolen}
                        </span>
                      </span>
                    </button>
                  </div>

                  {!isSignedIn && (
                    <FiLogIn
                      size={27}
                      className="cursor-pointer"
                      onClick={handleShow}
                    />
                  )}

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Required!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <SignedOut>
                        <div className="flex  justify-evenly items-center-safe">
                          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-md hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition duration-150 ease-in-out">
                            <SignInButton />
                          </button>

                          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-150 ease-in-out">
                            <SignUpButton />
                          </button>
                        </div>
                      </SignedOut>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>

                  <SignedIn>
                    <UserButton />
                  </SignedIn>





                  












                  
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
