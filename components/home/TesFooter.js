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
                <div className={s.content_wrapper}>
                    <h3 className={s.maps_title}>Nunggu Apa Lagi ?</h3>
                    <p>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an</p>
                    <div className={s.content_menu_wrapper}>
                        <div className={s.content_menu_list}>
                            <a href="">Facebook</a>
                            <a href="">Twitter</a>
                            <a href="">Instagram</a>
                        </div>
                        <div className={s.content_menu_list}>
                            <a href="">Home</a>
                            <a href="">Get Started</a>
                            <a href="">FAQ</a>
                        </div>
                        <div className={s.content_menu_list}>
                            <a href="">Sponsorship</a>
                            <a href="">Timeline</a>
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                    <p className={s.make_with}>Make With 💙 By Sanjos DEV</p>
                </div>
            </div>
        </div>
    )
}

export default TesFooter