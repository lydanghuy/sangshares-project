import React, { useState } from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './NavbarMenu.module.css'
import HamButton from './HamButton'
import {ReactComponent as Logo} from '../../../../images/brand/sssomething-logo-2.svg'
import Backdrop from '../../../Backdrop/Backdrop'

function NavbarMenu(props) {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const openMenu = () => {
        setOpenMenu(!isOpenMenu);
    }
    const openNavMenu = (isOpenMenu ? styles.openNavbarMenu : '')

    const [isOpenSearch, setOpenSearch] = useState(false);
    const openSearchBar = () =>{
        setOpenSearch(!isOpenSearch);
    }

    return (

        <div className={styles.innercontainer}>
            <nav className={styles.mobileNavbar}>
                {/* <HamButton onOpenMenu={openMenu}/> */}
                <HamButton handleToggle={openMenu} state={isOpenMenu}/>
                <Link to="/">
                    <Logo className={styles.logo}/>
                </Link>
            </nav>
            <div className={`${styles.desktopNavbar} ${isOpenMenu?openNavMenu:''}`}>
                <Link to="/" className={styles.navbarBrand} >
                    <img alt="SangSharesSomething" style={{height:45}} src='/images/brand/sssomething-logo.png'></img>
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
                        <Link to="/music">Music</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/about">Life</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/portfolio">Through My Lens</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.social} ${isOpenSearch?styles.active:null}`}>
                <div className={`${styles.socialSearch} ${isOpenSearch?styles.active:null}`}>
                    <div className={`${styles.searchIcon} ${styles.socialLogo}`} onClick={openSearchBar}><i className="fas fa-search fa-2x"></i></div>
                    <div className={styles.searchInput} role="search">
                        <input type="search" className={`${styles.searchBar} ${isOpenSearch?styles.active:null} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} name="q" placeholder="Search something"></input>
                    </div>
                    
                </div>
                <a href="https://www.facebook.com/sang.tp.11296" rel="noopener noreferrer" className={`${styles.fbLogo} ${styles.socialLogo} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} target="_blank">
                    <i className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/nguoidiban.mua/" rel="noopener noreferrer" className={`${styles.igLogo} ${styles.socialLogo} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} target="_blank">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <Link className={`${styles.avatar} ${isOpenSearch?styles.active:null}`} to='/about'></Link>
            </div>
            {isOpenMenu && <Backdrop onClose={openMenu} />}
        </div>
    )
}

export default NavbarMenu
