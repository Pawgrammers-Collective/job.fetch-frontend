import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthButtons from "./Components/buttons/AuthButtons";
import styles from "./Components/styles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.Header}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Job.fetch( )
          </Navbar.Brand>
          <Nav className="navLinks">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>         
            <Nav.Link as={Link} to="/profile">
              Your Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
            <AuthButtons />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
