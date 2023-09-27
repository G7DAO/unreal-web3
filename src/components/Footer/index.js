import React from 'react';

import styles from './styles.module.css';

const FooterComponent = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div>
                    <img src='images/footer_logo.png' alt='Footer Logo' />
                    <p className={styles.copyRightText}>Copyright © 2023 Game7<br />All rights reserved.</p>
                    <img src='images/game7_logo.png' alt='Game7 Logo' />
                </div>

                <div className={styles.footerItemsWrapper}>
                    <p className={styles.footerItemTitle}>Resources</p>

                    <a href='#' className={styles.footerItemText}>Download</a>
                    <a href='#' className={styles.footerItemText}>Docs</a>
                    <a href='#' className={styles.footerItemText}>Github</a>
                </div>

                <div className={styles.footerItemsWrapper}>
                    <p className={styles.footerItemTitle}>Connect</p>

                    <a href='#' className={styles.footerItemText}>G7 Discord</a>
                    <a href='#' className={styles.footerItemText}>Summon Discord</a>
                    <a href='#' className={styles.footerItemText}>Youtube</a>
                </div>

                <div className={styles.footerItemsWrapper}>
                    <p className={styles.footerItemTitle}>Legal</p>

                    <a href='#' className={styles.footerItemText}>Terms</a>
                    <a href='#' className={styles.footerItemText}>Privacy</a>
                    <a href='#' className={styles.footerItemText}>Cookies</a>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;
