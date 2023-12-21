/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';

function SavedJobsAccordian(props) {
  console.log(props);
  useEffect(() => {
  }, [props.savedJobs, props.savedCLs]);
  return (
    <>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {props.savedJobs.map((value, idx) => {
          return (
            <>
              <Accordion.Item eventKey={value._id}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <Accordion.Header> {value.jobData.title} </Accordion.Header>
                  </div>
                  <Button 
                    variant="danger"
                    type="submit"
                    onClick = {() => props.deleteSavedJob (value)}
                    >Delete
                  </Button>
                </div>
                
                <Accordion.Body>  
                  <Accordion.Item eventKey={{idx}}>
                    <Accordion.Header>Job Description</Accordion.Header>
                    <Accordion.Body>
                      {value.jobData.description}
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey={`${idx}.${idx}`}>
                    <Accordion.Header>Job Qualifications</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      {value.jobData.qualifications && value.jobData.qualifications.items && value.jobData.qualifications.items.map((value, idx) => {
                        return (
                          <li key={idx}> {value} </li>
                        )
                        }
                      )}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey={`${idx}.${idx}.${idx}`}>
                    <Accordion.Header>Job Responsibilities</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                      {value.jobData.responsibilities && value.jobData.responsibilities.items && value.jobData.responsibilities.items.map((value, idx) => {
                        return (
                          <li key={idx}> {value} </li>
                        )
                        }
                      )}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey={`${idx}.${idx}.${idx}.${idx}`}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ flex: 1 }}>
                        <Accordion.Header> Cover Letter </Accordion.Header>
                      </div>
                        {props.savedCLs.find(cl => cl.jobDescription === value.jobData.description) ? (
                          <Button
                            variant="danger"
                            type="submit"
                            onClick={() => props.deleteSavedCL(props.savedCLs.find(cl => cl.jobDescription === value.jobData.description))}
                          >
                            Delete
                          </Button>
                        ) : (
                          <Button
                            onClick={async () => {
                              const generatedCL = await props.generateCL(value.jobData.title, value.jobData.description);
                              props.saveCL(generatedCL, value.jobData.description);
                            }}
                            variant="primary"
                          >
                            Generate a Cover Letter!
                          </Button>
                        )}
                    </div>
                    <Accordion.Body>
                      {props.savedCLs.find(cl => cl.jobDescription === value.jobData.description) ? (
                        props.savedCLs.find(cl => cl.jobDescription === value.jobData.description).coverletter
                      ) : (
                        'No saved cover letter found'
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
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