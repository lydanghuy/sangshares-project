import React, {useState} from 'react'
import styles from './Header.module.css'
import MainNavbar from './MainNavigation/MainNavbar'

export default function Header(props) {

    const[white, setWhite] = useState(false);
    const[hide, setHide] = useState(false);
    
    var oldPosition = 0;
    const scrollDetect = () => {
        let newPosition = window.pageYOffset;
        if(newPosition >= 100){
            setWhite(true);
        } else{
            setWhite(false);
        }
        if (newPosition-oldPosition > 0 && newPosition >= 1200){
            setHide(true);
        }
        else if (oldPosition - newPosition > 0) {
            setHide(false);
        }
        oldPosition = newPosition;
    }
    window.addEventListener('scroll', scrollDetect);

    return (
        <header className={`${styles.transparentNavbar} ${white ? styles.whiteNavbar : ''} ${hide?styles.hide:''}`}>
            <MainNavbar whiteHeader={white ? "true":''}/>
        </header>
    )
}
