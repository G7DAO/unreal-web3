import React from 'react';

import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faXTwitter, faGithub, faYoutube, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
    return (
        <div className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogoWrapper}>
                    <img src='images/logo.svg' alt='Web3.Unreal Logo' /> 
                    <img src='images/g7_logo.svg' alt='Game7 Logo' /> 
                </div>

                <hr/>

                <div className={styles.footerItemsWrapper}>
                    <a href='https://www.unrealengine.com/marketplace/en-US/product/e531ab2a55f64e9c93db49d242908626' target="_blank" rel="noopener noreferrer">Download</a>
                    <a href='https://web3unreal.readthedocs.io/en/latest/' target="_blank" rel="noopener noreferrer">Docs</a>
                    <a href='https://github.com/G7DAO/web3.unreal' target="_blank" rel="noopener noreferrer">Github</a>
                </div>

                <hr/>

                <div className={styles.footerItemsWrapper}>
                    <a href='https://discord.com/invite/g7dao' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
                    <a href='https://twitter.com/G7_DAO' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href='https://github.com/G7DAO/web3.unreal' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='https://www.youtube.com/channel/UCErT-tpN4SE0ihTzU_fY-BQ' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href='https://medium.com/@G7_DAO' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} /></a>
                    <a href='https://www.linkedin.com/company/g7dao/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
            <img src='images/w3_logo.svg' alt='Web3.Unreal Logo' className={styles.footerLogo}/> 
        </div>
    )
}

export default FooterComponent;
