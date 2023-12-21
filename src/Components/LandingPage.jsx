import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "./styles/LandingPage.module.css";
import Button from 'react-bootstrap/Button';

function LandingPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
       

      <h1>Welcome to Job.fetch( <img src="/img/logo.png" className={styles.logo}/> )</h1>

      {isAuthenticated ? (
        <div className={styles.intro}>
        <p>
        Welcome to Job.fetch( ), your personalized gateway to career success! Struggling to find the perfect job in your city? Look no further. Simply input your location, and let Job.fetch( ) do the rest. Our innovative platform not only matches you with tailored job opportunities but also allows you to save and organize your preferred positions with ease. Take your job search to the next level by effortlessly generating cover letters and staying informed with curated news articles related to your desired industry and company. Job.fetch( ) is not just a job board; it is your strategic ally in building the career you have always dreamed of.
        </p>
        <Button className={styles.buttonAnimate}>Get started by clicking Home above!</Button>
        </div>
      ) : (
        <p>Please log in to start finding a job!</p>
      )}
    </div>
  );
}

export default LandingPage;
