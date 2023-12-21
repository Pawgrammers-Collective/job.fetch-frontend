import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import styles from "./styles/JobCard.module.css";
import NewsModal from "./NewsModal.jsx";

function JobCard(props) {
  const [isSaved, setIsSaved] = useState(Array(props.job.length).fill(false));
  const [isLoading, setIsLoading] = useState(Array(props.job.length).fill(false));

  const handleClick = async (value, index) => {
    const updatedIsLoading = [...isLoading];
    updatedIsLoading[index] = true;
    setIsLoading(updatedIsLoading);
    await props.generateCL(value.title, value.description);
    updatedIsLoading[index] = false;
    setIsLoading(updatedIsLoading);
  };

  const splitDescription = (description) => {
    // Use a regular expression to find and replace the desired text with bold formatting
    const formattedDescription = description.replace(
      /\n\n(.*?)\n\n/g,
      (match, group) => `\n\n**${group}**\n\n`
    );

    return formattedDescription.split("\n\n");
  };

  const formatParagraph = (paragraph, index) => {
    const bulletPoints = paragraph.split("\n•");
    
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

    return <p key={index}>{paragraph}</p>;
  };

  return (
    <div className={styles.JobCardContainer}>
      {props.job.map((value, index) => (
        <Card key={index} className={styles.Card} style={{ width: "40em", height: "18rem" }}>

          <Card.Body>
            <Card.Title>{value.title}</Card.Title>


            {splitDescription(value.description).map((text, i) => (
              formatParagraph(text, i)
            ))}

  
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                props.handleSave(value);
                const updatedIsSaved = [...isSaved];
                updatedIsSaved[index] = !updatedIsSaved[index];
                setIsSaved(updatedIsSaved);
              }}
              className={`${styles.saveButton} ${isSaved[index] ? styles.savedButton : ""}`}
              disabled={isSaved[index]}
            >
              {isSaved[index] ? "Saved!" : "Save this Job!"}

            </Button>

            <Button onClick={() => handleClick(value, index)} variant="primary">
              {isLoading[index] ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    variant="success"
                  />
                  <span>Fetching your letter...</span>
                </>
              ) : (
                'Generate a Cover Letter!'
              )}
            </Button>
            <NewsModal getNews={props.getNews} newsArticle={props.newsArticle} companyName={value.companyName}/>
            {/* <Button onClick={()=>props.getNews(value.companyName)}>Get News for this Company</Button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default JobCard;
