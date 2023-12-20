/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchForm(props) {
  const { isAuthenticated } = useAuth0();
  const [show, setShow] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(e) {
    setCityInput(e.target.value);
    console.log(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch(cityInput);
    handleClose();
    console.log(cityInput);
  }

  return (
    <>
      <h1>Job Search</h1>
      {isAuthenticated ? (
        <>
          <Button variant="primary" onClick={handleShow}>
            Launch job search
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Job location search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter a city"
                    aria-label="searchbar"
                    aria-describedby="searchbar"
                    id="searchbar"
                    onChange={handleChange}
                  />
                  <Button
                    variant="outline-secondary"
                    id="search-button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <p>Please log in to search for jobs</p>
      )}
    </>
  );
}

export default SearchForm;
