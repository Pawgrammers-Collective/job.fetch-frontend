/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles/CoverLetter.module.css';

function CoverLetter(props) {
  console.log(props);

  return (
    <div className={styles.CoverLetter}>
      <div className={styles.Content}>
      <h2>Cover Letter</h2>
        <p>{props.coverLetter.coverLetter}</p>
        <button onClick = {() => props.saveCL(props.coverLetter, props.genCLJobDesc)}>Save this Cover Letter</button>
      </div>
    </div>
  );
}

export default CoverLetter;
