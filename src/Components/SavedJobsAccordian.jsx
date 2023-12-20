/* eslint-disable react/prop-types */
import React from "react";
import Accordion from "react-bootstrap/Accordion";


function SavedJobsAccordian(props) {
  console.log(props.savedJobs);
  return (
    <>
    <Accordion defaultActiveKey="0">
      {props.savedJobs.map((value, idx) => {
        return (
          <>
          <Accordion.Item eventKey={idx}>
            <Accordion.Header>{value.title}</Accordion.Header>
            <Accordion.Body>
              {value.description}
            </Accordion.Body>
          </Accordion.Item>
          </>
        )
      })}
    </Accordion>
    </>
  );
}

export default SavedJobsAccordian;
