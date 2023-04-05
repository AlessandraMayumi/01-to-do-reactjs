import styles from './Header.module.css'
import logo from '../assets/Logo.svg'

export function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.img} src={logo}/>
        </div>
    )
}
