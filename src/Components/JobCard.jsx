
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles/JobCard.module.css";

function JobCard(props) {
  const [isSaved, setIsSaved] = useState(false);

  return props.job.map((value, index) => {
    return (
      <div key={index}>
        <Card className={styles.Card} style={{ width: "40em", height: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{value.title}</Card.Title>
            <Card.Text>{value.description}</Card.Text>

            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                props.handleSave(value);
                setIsSaved(true);
              }}
              className={`${styles.saveButton} ${isSaved ? styles.savedButton : ""}`}
              disabled={isSaved}
            >
              {isSaved ? "Saved!" : "Save this Job!"}
            </Button>

            <Button
              onClick={() => props.onSaveCoverLetter(value.title, value.description)}
              variant="primary"
            >
              Generate a Cover Letter!
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

}

export default JobCard;