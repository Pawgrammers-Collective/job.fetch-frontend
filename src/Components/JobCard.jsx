/* eslint-disable react/prop-types */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles/JobCard.module.css";

function JobCard(props) {
  console.log(props);
  if (props.jobs.length === 0) {
    return <h1> No Jobs Found </h1>
  }
  else {
    return props.jobs.map((value, index) => {
      return (
        <div key={index}>
          <Card className={styles.Card}style={{ width: "40em", height: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>{value.description}</Card.Text>
              <Button 
              variant="primary"
              type="submit"
              onClick = {() => props.handleSave (value)} >Save this Job! </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default JobCard;