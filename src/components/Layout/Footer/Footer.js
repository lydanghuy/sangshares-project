import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logo from '../../../images/brand/sssomething-logo-2.png'
function Footer(props) {
    return (
        <footer className={styles.footerWeb}>
            <span className={styles.copyrights}>
                Copyright © 2021 SangSharesSomething. All Rights Reserved.
            </span>
            <Link to='/' className={styles.smallLogo}>
                <img className={styles.logoimg} alt='SangSharesSomething Logo' src={logo} style={{height:50,width:'auto'}}></img>
            </Link>
            <div className={styles.footerSocial}>
            <a href="https://www.facebook.com/sang.tp.11296" rel="noopener noreferrer" className={styles.socialLogo} target="_blank">
                <i className="fab fa-facebook-square fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/nguoidiban.mua/" rel="noopener noreferrer" className={styles.socialLogo} target="_blank">
                <i className="fab fa-instagram fa-lg"></i>
            </a>
            </div>
        </footer>
    )
}

export default Footer

