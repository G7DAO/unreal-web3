import React from 'react'
import styles from './styles.module.css'

function HeroButtons({showHighlight}){
    return (
    <div className={styles.heroActionBtnsRow}>
        {showHighlight ? <div className={styles.ovalPurpleHorizontalBlur}></div> : null}
        <a className={styles.heroDownloadBtn} href='https://unrealengine.com/marketplace/en-US/store' target="_blank" rel="noopener noreferrer">Download</a>
        <a className={styles.heroDocsBtn} href='https://web3unreal.readthedocs.io/en/latest/' target="_blank" rel="noopener noreferrer">Docs</a>
        <img src='images/light_star_big.svg' className={styles.heroLightStar1} alt='Light Illustration' /> 
    </div>)
}

export default HeroButtons