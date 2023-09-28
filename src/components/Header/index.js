import React from 'react';

import styles from './styles.module.css';

const HeaderComponent = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <img src='images/logo.svg' alt='Logo Image' />
                <button className={styles.downloadButton}>Download</button>
            </div>
        </div>
    )
}

export default HeaderComponent;
