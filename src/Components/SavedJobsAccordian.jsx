/* eslint-disable react/prop-types */
import React from "react";
import Accordion from "react-bootstrap/Accordion";


function SavedJobsAccordian(props) {
  console.log(props.savedJobs);
  return (
    <>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {props.savedJobs.map((value, idx) => {
          return (
            <>
              <Accordion.Item eventKey={idx}>
                <Accordion.Header>{value.jobData.title}</Accordion.Header>
                <Accordion.Body>
                  <Accordion.Item eventKey={`${idx}.${idx}`}>
                    <Accordion.Header>Job Description</Accordion.Header>
                    <Accordion.Body>
                      {value.jobData.description}
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* <Accordion.Item eventKey={`${idx}.${idx}.${idx}`}>
                    <Accordion.Header>Job Qualifications</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      {value.jobData.qualifications.items.map((value, idx) => {
                        return (
                          <li key={idx}> {value} </li>
                        )
                        }
                      )}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item> */}
                  {/* <Accordion.Item eventKey={`${idx}.${idx}.${idx}.${idx}`}>
                    <Accordion.Header>Job Responsibilities</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      {value.jobData.responsibilities.items.map((value, idx) => {
                        return (
                          <li key={idx}> {value} </li>
                        )
                        }
                      )}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item> */}
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
}


export default SavedJobsAccordian;
