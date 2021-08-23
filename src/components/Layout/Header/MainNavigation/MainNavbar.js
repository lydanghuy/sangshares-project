import React, {useState} from 'react'
// import { Link } from 'react-router-dom'


// import logo from '../../../../images/brand/sssomething-logo.png'
// import { HamButton } from './HamButton'
import styles from './MainNavbar.module.css'
import NavbarMenu from './NavbarMenu'

export default function MainNavbar(props) {

    const [isOpenMenu, setOpenMenu] = useState(false);
    const openMenu = () => {
        setOpenMenu(!isOpenMenu);
    }
    const openNavMenu = (isOpenMenu ? 'openNavbarMenu' : '')
    return (
        <div className={styles.container}>
            {/* <HamButton onOpenMenu={openMenu}/>
            <Link to="/" className={styles.navbarBrand} >
                <img alt="SangSharesSomething" style={{height:40}} src={logo}></img>
            </Link> */}
            <NavbarMenu classNameCus={openNavMenu} whiteHeader={props.whiteHeader === 'true' ? 'true':''}/>
        </div>
    )
}
