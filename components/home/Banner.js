import styles from '../../styles/Home.module.css'
const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.banner_title}>Hackathon
                <span className={styles.banner_title_second}> Santri</span>
            </h1>
            <p className={styles.banner_subtitle}>Kompetisi untuk menjawab berbagai problem pesantren dengan solusi digital.
                <span className={styles.banner_subtitle_second}> "Menciptakan teknologi dan memberi solusi"</span>
            </p>
            <div className={styles.watch_video}>
                <svg width="24" height="24" className={styles.watch_video_icon} fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path  fill-rule="evenodd" clip-rule="evenodd" d="M8 2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zM2 6h2v14h14v2H4c-1.1 0-2-.9-2-2V6zm18 10H8V4h12v12zm-8-1.5v-9l6 4.5-6 4.5z" fill="#fff" />
                </svg>
                <p className={styles.watch_video_title}>What is hackathon santri ?</p>
            </div>
        </div>
    )
}

export default Banner