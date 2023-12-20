import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function SavedJobs({ jobs }) {
  return (
    <Accordion defaultActiveKey="0">
      {jobs.map((job, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{job.title}</Accordion.Header>
          <Accordion.Body>{job.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default SavedJobs;
