import React from 'react';

import styles from './styles.module.css';

const LandingPage = () => {
    return (
        <div>
            <section className={styles.heroWrapper}>
                <div className={styles.heroLeft}>
                    <h1 className={styles.heroTitle}>BRIDGING THE GAP BETWEEN</h1>
                    <h1 className={styles.heroTitleSpan}>WEB3 AND UNREAL ENGINE</h1>
                    <p className={styles.heroDescription}>Connect with any EVM-compatible blockchain in minutes.</p>
                    <div className={styles.heroActionBtnsRow}>
                        <button className={styles.heroDownloadBtn}>Download</button>
                        <button className={styles.heroDocsBtn}>Docs</button>
                        <img src='images/hero_illustration.png' className={styles.heroIllustration} alt='Hero Illustration' />
                        <img src='images/light_star_big.svg' className={styles.heroLightStar1} alt='Light Illustration' />
                    </div>
                </div>
                <div className={styles.heroRightWrapper}>
                    <img src='images/hero_cover.png' className={styles.heroCoverImg} alt='Hero Cover Image' />
                    <img src='images/hero_fly.svg' alt='Hero Fly' className={styles.heroFly} />
                </div>
            </section>

            <section className={styles.effortlessIntegrationSection}>
                <div className={styles.effortlessCoverWrapper}>
                    <img src='images/effortless_cover.png' alt='Cover' className={styles.effortlessCover} />
                </div>
                <div>
                    <p className={styles.sectionTitle}>Effortless Integration with <span>HyperPlay</span> for MetaMask and WalletConnect Support</p>
                    <p className={styles.sectionDescription}>Our plugin enables players to connect their existing MetaMask or WalletConnect compatible wallet with Unreal Engine games, providing true interoperability across the web3 ecosystem.</p>
                </div>
            </section>

            <section className={styles.openSourceSection}>
                <p className={styles.sectionTitle}><span>Free and Open Source</span> Unreal Engine Plugin with MIT License</p>
                <div className={styles.openSourceCoverWrapper}>
                    <img src='images/open_source_cover.png' alt='Cover' className={styles.openSourceCover} />
                </div>
            </section>

            <section className={styles.pluginSection}>
                <h1 className={styles.columnSectionTitle}>view OUR<br />plugin in action</h1>
                <div className={styles.pluginImgsRow}>
                    <img src='images/plugin1.png' alt='Plugin Image' />
                    <img src='images/plugin2.png' alt='Plugin Image' />
                    <img src='images/plugin3.png' alt='Plugin Image' />
                </div>
            </section>

            <section className={styles.developmentSection}>
                <h1 className={styles.columnSectionTitle}>Web3 game<br />development has<br />never been easier</h1>
                <div className={styles.developmentList}>
                    <div className={styles.developmentCard}>
                        <p className={styles.developmentCardTitle}>In-Engine Cryptography Operations</p>
                        <p className={styles.developmentCardDesc}>Executing usual cryptographic tasks inside the engine removes the necessity for an external server, making the process more efficient and secure by localizing sensitive operations.</p>
                    </div>

                    <div className={styles.developmentCard}>
                        <p className={styles.developmentCardTitle}>INTRODUCING SUMMON</p>
                        <p className={styles.developmentCardDesc}>By integrating with the Summon infrastructure, developers can earn XP for their contributions to Web3.Unreal, fostering a dynamic collaborative environment.</p>
                    </div>

                    <div className={styles.developmentCard}>
                        <p className={styles.developmentCardTitle}>Comprehensive Docs</p>
                        <p className={styles.developmentCardDesc}>Our documentation covers various architectures and design patterns, offering developers insightful guidance for structuring their projects efficiently. View Docs</p>
                    </div>

                    <div className={styles.developmentCard}>
                        <p className={styles.developmentCardTitle}>Copy/Paste Functions</p>
                        <p className={styles.developmentCardDesc}>The documentation site offers numerous copy-paste examples, allowing developers to quickly integrate code snippets into their projects, saving time and effort.</p>
                    </div>

                    <div className={styles.developmentCard}>
                        <p className={styles.developmentCardTitle}>C++ & Blueprint Support</p>
                        <p className={styles.developmentCardDesc}>Both C++ and Async Blueprint nodes can be used for reads or writes, offering flexibility and catering to various programming preferences.</p>
                    </div>

                    <div className={styles.developmentCard}>
                        <p className={styles.developmentCardTitle}>Hyperplay Discord Direct Support</p>
                        <p className={styles.developmentCardDesc}>Complete web3 integration support is available on the Hyperplay Discord server, particularly in the #web3-unreal channel, where our team is ready to handle any questions or problems. Join Discord</p>
                    </div>
                </div>
            </section>

            <section className={styles.downloadSection}>
                <p className={styles.columnSectionTitle}>DOWNLOAD OUR plugin NOW</p>
                <div>
                    <p className={styles.downloadSectionDesc}>Learn more about Web3 integration into Unreal Engine by exploring our detailed GitHub documentation. Investigate engine compatibility, see screenshots, and dive into thorough explanations to maximize Web3's gaming potential. Enhance your development with Web3.Unreal by delving into our documentation.</p>
                    <div className={styles.downloadActionRow}>
                        <button className={styles.heroDownloadBtn}>Download</button>
                        <button className={styles.heroDocsBtn}>Docs</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;
