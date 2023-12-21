/* eslint-disable react/prop-types */
import React, { useState , useEffect }from 'react';
import Button from "react-bootstrap/Button";
import styles from './styles/CoverLetter.module.css';

function CoverLetter(props) {
  console.log(props);
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    setIsSaved(false);
  }, [props.coverLetter]);

  return (
    <div className={styles.CoverLetter}>
      <div className={styles.Content}>
        {/* <h2>Cover Letter</h2> */}
        <p>{props.coverLetter.coverLetter}</p>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            props.saveCL(props.coverLetter, props.genCLJobDesc);
            setIsSaved(true);
          }}
          className={`${styles.saveButton} ${isSaved ? styles.savedButton : ""}`}
          disabled={isSaved}
        >
          {isSaved ? "Saved!" : "Save this Coverletter!"}
        </Button>
      </div>
    </div>
  );
}

export default CoverLetter;
