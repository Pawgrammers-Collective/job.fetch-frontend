import React, { useState } from "react";
import aboutUs from "../assets/AboutUs.json";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./styles/aboutus.module.css";

function AboutUs() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseModal = () => {
    setSelectedPerson(null);
  };

  return (
    <>
      <h3>Hover to Know More About Us</h3>
      <div className={styles.aboutContainer}>
        {aboutUs.map((value, index) => (
          <Card
            key={index}
            className={styles.aboutCard}
            onClick={() => handleCardClick(value)}
          >
            {/* <div className={styles.hoverButton}> */}
            <div className={styles.cardButton}>
              {/* <div className={styles.buttonIcon}></div> */}
              <div className={styles.buttonLabel}>Click to Read More</div>
              {/* </div> */}
            </div>
            <Card.Body className={styles.cardBody}>
              <Card.Title className={styles.jobStatus}>Open to Work</Card.Title>

              <div className="person">
                <Card.Title className={styles.aboutName}>
                  {value.name}
                </Card.Title>
                <Card.Img
                  className={styles.profileImg}
                  variant="top"
                  src={value.img}
                  alt={value.name}
                />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={selectedPerson !== null} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>{selectedPerson && selectedPerson.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedPerson && selectedPerson.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AboutUs;
