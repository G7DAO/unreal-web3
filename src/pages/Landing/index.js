import React from 'react';

import styles from './styles.module.css';

const LandingPage = () => {
    return (
        <div>
            <div className={styles.heroWrapper}>
                <div className={styles.heroLeft}>
                    <h1 className={styles.heroTitle}>BRIDGING THE GAP BETWEEN <br /><span>WEB3 AND UNREAL ENGINE</span></h1>
                    <p className={styles.heroDescription}>Connect with any EVM-compatible blockchain in minutes.</p>
                    <div className={styles.heroActionBtnsRow}>
                        <button className={styles.heroDownloadBtn}>Download</button>
                        <button className={styles.heroDocsBtn}>Docs</button>
                        <img src='images/hero_illustration.png' className={styles.heroIllustration} alt='Hero Illustration' />
                    </div>
                </div>
                <img src='images/hero_cover.png' className={styles.heroCoverImg} alt='Hero Cover Image' />
            </div>
        </div>
    )
}

export default LandingPage;
