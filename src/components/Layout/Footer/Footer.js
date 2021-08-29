import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import {ReactComponent as Logo} from '../../../images/brand/sssomething-logo-2.svg'
function Footer(props) {
    return (
        <footer className={styles.footerWeb}>
            <span className={styles.copyrights}>
                Copyright © 2021 SangSharesSomething. All Rights Reserved.
            </span>
            <Link to='/' className={styles.smallLogo}>
                <Logo/>
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

