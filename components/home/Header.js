import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" srcset="" />
            <div className={styles.menu}>
                <Link href="/">
                    <a className={styles.menu_list} >Home</a>
                </Link>
                <Link href="/agenda">
                    <a className={styles.menu_list} >Agenda</a>
                </Link>
                <Link href="/faq">
                    <a className={styles.menu_list} >FAQ</a>
                </Link>
                <a className={styles.menu_list} >Contact Us</a>
            </div>
            <button className={styles.register_button}>Register</button>
        </div>
    )
}

export default Header