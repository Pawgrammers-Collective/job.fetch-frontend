import React from 'react';

function CoverLetter({ onSave, coverLetter }) {
  const handleSave = () => {
    console.log('Saving cover letter:', coverLetter);
    onSave(coverLetter);
  };

  console.log('Cover Letter Component - Cover Letter:', coverLetter);

  return (
    <>
      <h2>Cover Letter</h2>
      <div>
        <p>{coverLetter}</p>
        <button onClick={handleSave}>Save this Cover Letter</button>
      </div>
    </>
  );
}

export default CoverLetter;
