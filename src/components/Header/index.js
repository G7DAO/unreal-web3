import React from 'react';

import styles from './styles.module.css';
import HeroButtons from '../HeroButtons';

const HeaderComponent = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <img src='images/logo.svg' alt='Logo' />
                <HeroButtons showHighlight={false} hideDocsIfMobile={true}/>
            </div>
        </div>
    )
}

export default HeaderComponent;
