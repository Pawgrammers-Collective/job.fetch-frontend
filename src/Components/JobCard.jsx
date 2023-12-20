import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles/JobCard.module.css';

function JobCard({ job, onSaveCoverLetter }) {
  const [isEditingCoverLetter, setIsEditingCoverLetter] = useState(false);

  const handleSaveCoverLetterClick = () => {
    setIsEditingCoverLetter(true);
  };

  return (
    <div>
      <Card className={styles.Card} style={{ width: '40em', height: '18rem' }}>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>{job.description}</Card.Text>
          <Button variant="primary" onClick={handleSaveCoverLetterClick}>
            Save this Job!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;
