import React from 'react';
import aboutUs from '../assets/AboutUs.json';
import Card from 'react-bootstrap/Card';

function AboutUs() {
  return (
    <>
      {aboutUs.map((value, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img style={{height: '100px', width: '100px'}}variant="top" src={value.img} alt={value.name} />
          <Card.Body>
            <Card.Title>{value.name}</Card.Title>
            <Card.Text>{value.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default AboutUs;