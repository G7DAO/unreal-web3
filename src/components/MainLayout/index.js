import React from 'react';

import HeaderComponent from '../Header';

import styles from './styles.module.css';

const MainLayout = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
}
export default MainLayout;
