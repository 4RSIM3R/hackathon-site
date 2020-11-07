import styles from '../../styles/Home.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3 className={styles.footer_title}>Sponsors</h3>
            <hr className={styles.horizontal_line} />
            <div className={styles.footer_sponsors}>
                <img className={styles.aws_sponsors} src="https://d1.awsstatic.com/Digital%20Marketing/House/temp/logo_aws-educate_light.8a107f05996892b795db30104d5fb968d4619246.png" alt="" />
            </div>
        </div>
    )
}

export default Footer