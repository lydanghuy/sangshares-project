import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './NavbarMenu.module.css'

function NavbarMenu(props) {
    const openNavbarMenu = (props.classNameCus === 'openNavbarMenu' ? styles.openNavbarMenu : '');

    const [isOpenMenu, setOpenMenu] = useState(false);
    const openMenu = () => {
        setOpenMenu(!isOpenMenu);
    }
    const openNavMenu = (isOpenMenu ? 'openNavbarMenu' : '')

    return (

        <div className={`${openNavbarMenu} ${styles.container}`}>
            <div className={styles.desktopNavbar}>
                <Link to="/" className={styles.navbarBrand} >
                    <img alt="SangSharesSomething" style={{height:40}} src='/images/brand/sssomething-logo.png'></img>
                </Link>
                <ul className={styles.navbarMenu}>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/" className={styles.firstItem} >Photography</Link>
                        <ul className={styles.subMenu} role="menu">
                            <li>
                                <Link to="/explore">Explore</Link>
                            </li>
                            <li>
                                <Link to="/photographers">Photographers</Link>
                            </li>
                            <li>
                                <Link to="/challange">Challenge</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/book">Book</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/Music">Music</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/about">Life</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/joinme">Through My Lens</Link>
                    </li>
                </ul>
            </div>
            
            
            <div className={styles.socialSearch}>
                <a href="https://www.facebook.com/sang.tp.11296" rel="noopener noreferrer" className={`${styles.fbLogo} ${styles.socialLogo} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} target="_blank">
                    <i className="fab fa-facebook-square fa-lg"></i>
                </a>
                <a href="https://www.instagram.com/nguoidiban.mua/" rel="noopener noreferrer" className={`${styles.igLogo} ${styles.socialLogo} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} target="_blank">
                    <i className="fab fa-instagram fa-lg"></i>
                </a>
                <form action="/search" method="GET" className={styles.navbarSearch} role="search">
                    <input type="text" className={`${styles.searchQuery} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} name="q" placeholder="Search something"></input>
                </form>
            </div>
        </div>
    )
}

export default NavbarMenu
