import React from 'react';
import config from '../../config';
import styles from './Login.modules.css';

const authorize = () => {
  window.location = `https://accounts.spotify.com/authorize?client_id=${config.CLIENT_ID}&response_type=token&redirect_uri=${config.getRedirectURI()}`;
}

const Login = () => (
  <main className={styles.Login}>
    <button onClick={authorize}>Log in</button>
  </main>
);

export default Login;