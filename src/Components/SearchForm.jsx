import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Spinner from 'react-bootstrap/Spinner';
import styles from "./styles/Home.module.css";


function SearchForm(props) {
  const { isAuthenticated } = useAuth0();
  const [show, setShow] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function handleChange(e) {
    setCityInput(e.target.value);
    console.log(e);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    handleClose();
    await props.handleSearch(cityInput);
    setIsLoading(false);
    console.log(cityInput);
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <Button variant="primary" onClick={handleShow}>
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
                  <span>Fetching your jobs...</span>
                </>
              ) : (
                'Launch job search'
              )}
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header >
              <Modal.Title>Job location search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
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