import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../keep-logo.png";

const Nav = () => {
  return (
    <>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand className="text-white font-weight-bold logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
