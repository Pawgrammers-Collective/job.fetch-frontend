/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import styles from './styles/UserProfile.module.css'


function SavedJobsAccordian(props) {
  console.log(props);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
  }, [props.savedJobs, props.savedCLs]);
  if (props.savedJobs) {
    return (
      <>
        <Accordion className={styles.SavedJobAccordian} defaultActiveKey={['0']} alwaysOpen>
          {props.savedJobs.map((value, idx) => {
            return (
              <>
                <Accordion.Item className={styles.AccordItem} eventKey={value._id}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <div style={{ flex: 1 }} className={styles.AccordHeader}>
                      <Accordion.Header> {value.jobData.title} </Accordion.Header>
                    </div>
                    <Button
                      variant="danger"
                      type="submit"
                      onClick={() => props.deleteSavedJob(value)}
                    >Delete
                    </Button>
                  </div>

                  <Accordion.Body className={styles.AccordBody}>
                    <Accordion.Item eventKey={{ idx }}>
                      <Accordion.Header>Job Description</Accordion.Header>
                      <Accordion.Body className={styles.AccordDescription}>
                        {value.jobData.description}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey={`${idx}.${idx}`}>
                      <Accordion.Header>Job Qualifications</Accordion.Header>
                      <Accordion.Body className={styles.AccordQualifications}>
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
                      <Accordion.Body className={styles.AccordResponsibilities}>
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
                        <div style={{ flex: 1 }} className={styles.AccordCoverHeader}>
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
                              setIsLoading(true);
                              const generatedCL = await props.generateCL(value.jobData.title, value.jobData.description);
                              props.saveCL(generatedCL, value.jobData.description);
                              setIsLoading(false);
                            }}
                            variant="primary"
                          >
                            {isLoading ? (
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
                        )}
                      </div>
                      <Accordion.Body className={styles.AccordCover}>
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
  } else {
    return (
      <div>
        <p className={styles.NoSavedJobs}>No Jobs Saved!</p>
      </div>
    )
  }
}

export default SavedJobsAccordian;