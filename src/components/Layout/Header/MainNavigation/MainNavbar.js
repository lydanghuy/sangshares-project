import styles from './MainNavbar.module.css'
import NavbarMenu from './NavbarMenu'

export default function MainNavbar(props) {

    
    return (
        <div className={styles.container}>
            <NavbarMenu whiteHeader={props.whiteHeader === 'true' ? 'true':''}/>
        </div>
    )
}
