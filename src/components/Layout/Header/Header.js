import React, {useState} from 'react'
import styles from './Header.module.css'
import MainNavbar from './MainNavigation/MainNavbar'

export default function Header(props) {

    const[white, setWhite] = useState(false);

    const changeWhite = () => {
        if(window.scrollY >= 100){
            setWhite(true);
        } else{
            setWhite(false);
        }
    }
    window.addEventListener('scroll', changeWhite)

    return (
        <header className={`${styles.transparentNavbar} ${white ? styles.whiteNavbar : ''}`}>
            <MainNavbar whiteHeader={white ? "true":''}/>
        </header>
    )
}
