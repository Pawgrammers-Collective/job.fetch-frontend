import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (

    <Navbar expand="lg" className="footer">
      <Container>
        <Navbar.Brand>
          <div className="footerItems">
            <img
              alt=""
              src="./img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top mb-2"
            />
            <div>&copy; 2023 Pawgrammers Collective</div>
          </div>
        </Navbar.Brand>
      </Container>

    </Navbar>
  );
};

export default Footer;
