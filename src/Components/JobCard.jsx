import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles/JobCard.module.css";

function JobCard(props) {
  const [isSaved, setIsSaved] = useState(Array(props.job.length).fill(false));

  const splitDescription = (description) => {
    try {
      if (!description) {
        return [];
      }

      const formattedDescription = description.match(/\n\n([^\n]+?)\n\n/g);
      let matchAll = Array.from(formattedDescription);
      console.log("Formatted Description:", matchAll);

      return matchAll.map((text, i) => {
        console.log("Current match:", text);
        return <h4 key={i}>{text}</h4>;
      });
    } catch (error) {
      console.error('Error in splitDescription:', error.message);
      return [];
    }
  };

  const formatParagraph = (paragraph, index) => {
    try {
      if (typeof paragraph !== 'string') {
        throw new Error('Invalid paragraph type');
      }

      const bulletPoints = paragraph.split("\n•");
      console.log("Bullet Points:", bulletPoints);

      if (bulletPoints.length > 1) {
        return (
          <div key={index}>
            <p>{bulletPoints[0]}</p>
            <ul>
              {bulletPoints.slice(1).map((point, pointIndex) => (
                <li key={pointIndex}>{point.trim()}</li>
              ))}
            </ul>
          </div>
        );
      }

      console.log("Returning from formatParagraph:", paragraph);
      return <p key={index}>{paragraph}</p>;
    } catch (error) {
      console.error('Error in formatParagraph:', error.message);
      return <p key={index}>Error in formatting paragraph</p>;
    }
  };

  const renderButtons = (value, index) => (
    <>
      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          props.handleSave(value);
          const updatedIsSaved = [...isSaved];
          updatedIsSaved[index] = !updatedIsSaved[index];
          setIsSaved(updatedIsSaved);
        }}
        className={`${styles.saveButton} ${
          isSaved[index] ? styles.savedButton : ""
        }`}
        disabled={isSaved[index]}
      >
        {isSaved[index] ? "Saved!" : "Save this Job!"}
      </Button>

      <Button
        onClick={() =>
          props.onSaveCoverLetter(value.title, value.description)
        }
        variant="primary"
      >
        Generate a Cover Letter!
      </Button>
    </>
  );

  return (
    <div className={styles.JobCardContainer}>
      {props.job.map((value, index) => (
        <Card
          key={index}
          className={styles.Card}
          style={{ width: "40em", height: "18rem" }}
        >
          <Card.Body>
            <Card.Title>{value.title}</Card.Title>

            {splitDescription(value.description)}
            {formatParagraph(value.description, index)}
            {renderButtons(value, index)}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default JobCard;
