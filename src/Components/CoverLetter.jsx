import React from 'react';

function CoverLetter(props) {
  const handleSave = () => {
    console.log('Saving cover letter:', props.coverLetter);
    onSave(props.coverLetter);
  };

  console.log('Cover Letter Component - Cover Letter:', props.coverLetter);

  return (
    <>
      <h2>Cover Letter</h2>
      <div>
        <p>{props.coverLetter.coverLetter}</p>
        <button onClick={handleSave}>Save this Cover Letter</button>
      </div>
    </>
  );
}

export default CoverLetter;
