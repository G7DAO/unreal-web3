import React from 'react'
import styles from './styles.module.css'

function HeroButtons({showHighlight, hideDocsIfMobile}){
    return (
    <div className={styles.heroActionBtnsRow}>
        {showHighlight ? <div className={styles.ovalPurpleHorizontalBlur}></div> : null}
        <a className={styles.heroDownloadBtn} href='https://www.unrealengine.com/marketplace/en-US/product/e531ab2a55f64e9c93db49d242908626' target="_blank" rel="noopener noreferrer">Download</a>
        <a className={`${styles.heroDocsBtn} ${hideDocsIfMobile ? styles.hideIfMobile : ''}`} href='https://web3unreal.readthedocs.io/en/latest/' target="_blank" rel="noopener noreferrer">Docs</a>
        {showHighlight ? <img src='images/light_star_big.svg' className={styles.heroLightStar1} alt='Light Illustration' /> : null }
    </div>)
}

export default HeroButtons