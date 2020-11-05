import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3 className={styles.footer_title}>Sponsors</h3>
            <hr className={styles.horizontal_line} />
            <div className={styles.footer_sponsors}>
                <img className={styles.footer_sponsors_item} src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png" alt="" />
                <img className={styles.footer_sponsors_item} src="https://www.hltech.io/hltech-webui/wp-content/uploads/2020/01/g_cloud.png" alt="" />
            </div>
        </div>
    )
}

export default Footer