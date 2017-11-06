import React from 'react';
import styles from './Header.modules.css';
import logo from '../../../logo.png';

const logOut = () => {
  sessionStorage.clear();
  window.location = window.location.origin;
}

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.HeaderLeft}></div>
    <div className={styles.HeaderCenter}>
      <a href="/">
        <img src={logo} alt="logo" />
        <span>Reactify</span>
      </a>
    </div>
    <div className={styles.HeaderRight}>
    {sessionStorage.accessToken &&
        <button className={styles.HeaderButtonLogout} onClick={logOut}>Log out</button>
    }
    </div>
  </header>
);

export default Header;