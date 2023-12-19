import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function JobCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Job 1</Card.Title>
        <Card.Text>
          This is your #__ Job!
        </Card.Text>
        <Button variant="primary">Save this Job!</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;