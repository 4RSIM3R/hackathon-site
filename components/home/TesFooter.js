import s from '../../styles/Tes.module.css'

const TesFooter = () => {
    return (
        <div className={s.footer_section}>
            <div className={s.footer_content}>
                <div className={s.maps_wrapper}>
                    <h3 className={s.maps_title}>Hackathon Locations</h3>
                    <div className={s.maps_content}>

                    </div>
                </div>
            </div>
            <div className={s.footer_content}>
                <div className={s.socmed_wrapper}>
                    <h3 className={s.maps_title}>Nunggu Apa Lagi ?</h3>
                    <p>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an</p>
                </div>
            </div>
        </div>
    )
}

export default TesFooter