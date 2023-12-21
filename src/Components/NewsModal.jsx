import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './styles/NewsModal.module.css';
import { propTypes } from 'react-bootstrap/esm/Image';

function NewsModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    props.getNews(props.companyName);
  };

  return (
    <div className={styles.NewsModal}>
      <Button variant="primary" onClick={handleShow}>
        {`Get News on: ${props.companyName}`}
      </Button>

      <Modal className={styles.modalContent} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: 'kalam'}}>{props.newsArticle.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {
            props.newsArticle.urlToImage ? (
              <img src={props.newsArticle.urlToImage} style={{height: '18rem', width: '468px'}}></img>

            ): (
              <img src="https://placehold.co/468x400?text=Woof!+No+Image+Found"/>
            )
          }

            <p style={{fontFamily: 'kalam', lineHeight: '2'}}>{`Author: ${props.newsArticle.author}`} {`Date: ${props.newsArticle.publishedAt}`}</p> 
          
          <p style={{fontFamily: 'kalam'}}>{props.newsArticle.description} <a style={{fontFamily: 'kalam'}} href={props.newsArticle.url}>Full Article</a></p>
          
          </Modal.Body>
        <Modal.Footer>
          <Button style={{fontFamily: 'kalam'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewsModal;