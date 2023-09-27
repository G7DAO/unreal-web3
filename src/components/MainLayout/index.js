import React from 'react';

import HeaderComponent from '../Header';
import FooterComponent from '../Footer';

import styles from './styles.module.css';

const MainLayout = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </div>
    )
}
export default MainLayout;
