import React, { useState } from 'react';
import aboutUs from '../assets/AboutUs.json';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './aboutus.module.css'

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
        <h3>Click on an image to learn more</h3>
    <div className='about-container'>
      {aboutUs.map((value, index) => (
        <Card
          key={index}
          className="about-card" 
          onClick={() => handleCardClick(value)}
        >
          <Card.Img
            className="profile-img" 
            variant="top"
            src={value.img}
            alt={value.name}
          />
          <Card.Body>
            <Card.Title>{value.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
      </div>

      <Modal show={selectedPerson !== null} onHide={handleCloseModal}>
        <Modal.Header >
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

