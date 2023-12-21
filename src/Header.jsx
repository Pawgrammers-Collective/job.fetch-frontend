import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthButtons from "./Components/buttons/AuthButtons";
import { Link } from "react-router-dom";
import styles from "./Components/styles/Header.module.css";



function Header() {
  return (
    <div>
      <Navbar className={styles.navBar}>
        <Container>
          <Navbar.Brand as={Link} to="/" className={styles.brand}>
            Job.fetch( )
          </Navbar.Brand>
          <Nav className={styles.nav}>
            <Nav.Link as={Link} className={styles.navLink} to="/Home ">
              Home
            </Nav.Link>         
            <Nav.Link as={Link} className={styles.navLink} to="/profile">
              Your Profile
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navLink} to="/about-us">
              About Us
            </Nav.Link>
            <AuthButtons className={styles.authbuttons}/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
