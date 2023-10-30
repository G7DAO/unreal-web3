import React from 'react';

import styles from './styles.module.css';
import HeroButtons from '../HeroButtons';

const HeaderComponent = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <img src='images/logo.svg' alt='Logo Image' />
                <HeroButtons showHighlight={false} />
            </div>
        </div>
    )
}

export default HeaderComponent;
