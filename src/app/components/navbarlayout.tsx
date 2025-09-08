"use client"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function navbarlayout() {
  return (
    <>
          <Navbar bg="light" data-bs-theme="light">
              <Container>
                  <Navbar.Brand href="#home">NewsLand</Navbar.Brand>
                  <Nav className="ms-auto">
                      <Nav.Link href="#home">Home</Nav.Link>

                      <Nav.Link href="#pricing">SignUp</Nav.Link>
                  </Nav>
              </Container>
          </Navbar></>
  )
}
