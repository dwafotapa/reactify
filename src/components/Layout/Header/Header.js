import React from 'react';
import styles from './Header.modules.css';
import logo from '../../../logo.png';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.HeaderCenter}>
      <a href="/">
        <img src={logo} alt="logo" />
        <span>Reactify</span>
      </a>
    </div>
  </header>
);

export default Header;