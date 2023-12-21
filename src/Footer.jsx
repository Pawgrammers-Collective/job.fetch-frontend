import React from 'react';
import styles from "./Components/styles/Footer.module.css";

const Footer = () => {
  return (
      <div className={styles.footerItems}>
        <img
          alt="Pawgrammers collective logo"
          src="./img/logo.png"

        />
        <div>&copy; 2023 Pawgrammers Collective</div>
      </div>
  );
};

export default Footer;
