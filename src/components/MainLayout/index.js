import React from 'react';

import HeaderComponent from '../Header';
import FooterComponent from '../Footer';

import styles from './styles.module.css';

const MainLayout = ({ children }) => {
    return (
        <div className={styles.mainContainer}>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </div>
    )
}
export default MainLayout;
