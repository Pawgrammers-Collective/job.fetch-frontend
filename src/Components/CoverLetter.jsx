import React, { useState } from "react";

function CoverLetter(props) {
  const [isEditing, setIsEditing] = useState(false);

  function userEditing() {
    setIsEditing(true);
  }

  // function handleChange(event) {}

  return (
    <>
      <h2>This Is the cover letter</h2>
      <div  onDoubleClick={userEditing}>
        {
          isEditing ? (
            <input type="text" value={text} />
          ) : (
            <p>your paragraph tex</p>
          )
        }
      </div>
      <button>Save this Cover Letter</button>
    </>
  );
}

export default CoverLetter;
