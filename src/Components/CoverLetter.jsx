import React from 'react';
import styles from './styles/CoverLetter.module.css';

function CoverLetter(props) {
  const handleSave = () => {
    console.log('Saving cover letter:', props.coverLetter);
    onSave(props.coverLetter);
  };

  console.log('Cover Letter Component - Cover Letter:', props.coverLetter);

  return (
    <div className={styles.CoverLetter}>
      <div className={styles.Content}>
      <h2 className={styles.Heading}>Cover Letter</h2>
        <p>{props.coverLetter.coverLetter}</p>
        <button onClick={handleSave}>Save this Cover Letter</button>
      </div>
    </div>
  );
}

export default CoverLetter;
