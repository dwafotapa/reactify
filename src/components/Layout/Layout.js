import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.modules.css';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;