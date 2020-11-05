import styles from '../../styles/Agenda.module.css'
const Schedule = ({ tabIndex }) => {
    if (tabIndex === 1) {
        return (
            <div className={styles.agenda_tabs_body}>
                <h3>08:00 - 11:00</h3>

                <div className={styles.agenda_tabs_body_content}>
                    <h3>Registration</h3>
                    <p>Registrasi hackathon sangatlah mudah, TRIMO MATENG</p>
                </div>
            </div>
        )
    } else if (tabIndex === 2) {
        return (
            <div className={styles.agenda_tabs_body}>
                <h3>09:00 - 11:00</h3>

                <div className={styles.agenda_tabs_body_content}>
                    <h3>Registration</h3>
                    <p>Registrasi hackathon sangatlah mudah, TRIMO MATENG</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.agenda_tabs_body}>
                <h3>07:00 - 11:00</h3>

                <div className={styles.agenda_tabs_body_content}>
                    <h3>Registration</h3>
                    <p>Registrasi hackathon sangatlah mudah, TRIMO MATENG</p>
                </div>
            </div>
        )
    }
}

export default Schedule