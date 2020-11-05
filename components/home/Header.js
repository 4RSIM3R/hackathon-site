import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {

    const clickHandle = () => {
        document.location.href = 'https://stackoverflow.com/';
    }

    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" srcset="" />
            <div className={styles.menu}>
                <Link href="/" scroll={false}>
                    <a className={styles.menu_list} >Home</a>
                </Link>
                <Link href="/agenda">
                    <a className={styles.menu_list} >Agenda</a>
                </Link>
                <a className={styles.menu_list} onClick={e => clickHandle()}>Contact Us</a>
            </div>
            <button className={styles.register_button}>Register</button>
        </div>
    )
}

export default Header