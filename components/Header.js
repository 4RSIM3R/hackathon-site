import styles from '../styles/Home.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" srcset="" />
            <div className={styles.menu}>
                <a className={styles.menu_list} >Home</a>
                <a className={styles.menu_list} >Agenda</a>
                <a className={styles.menu_list} >FAQ</a>
                <a className={styles.menu_list} >Contact Us</a>
            </div>
            <button className={styles.register_button}>Register</button>
        </div>
    )
}

export default Header