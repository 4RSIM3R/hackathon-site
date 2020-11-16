import s from '../../styles/Tes.module.css'
import ReactPlayer from "react-player"
import { Chrono } from 'react-chrono'

const TesBanner = () => {

    const items = [
        {
            title: "15 December 2020",
            cardSubtitle: "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya",
        },
        {
            title: "21 January 2021",
            cardSubtitle: "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya",
        },
        {
            title: "21 January 2021",
            cardSubtitle: "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya",
        },];

    return (
        <div className={s.banner_wrapper}>
            <h1 className={s.banner_title}>Hackathon Santri 2021</h1>
            <h3 className={s.banner_subtitle}>Kompetisi untuk menjawab berbagai problem pesantren dengan solusi digital. <br /> <span>Menciptakan teknologi dan memberi solusi</span></h3>
            <h5 className={s.banner_location}>Darul Ulum, Jombang</h5>
            <ReactPlayer
                className={s.video_player}
                controls={true}
                url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
            />
            <div className={s.event_wrapper}>
                <h2 className={s.event_title}>Why You Should Attend ?</h2>
                <div className={s.card_wrapper}>
                    <div className={s.card_body}>
                        <h4>Firstly At Ponpes</h4>
                        <p>Selamat kamu berkesempatan untuk berkontribusi di hackathon pertama yang di selenggarakan di ponpes. Jadi tunggu apalagi, kami tunggu solusimu</p>
                        <button>Hakcathon Di Ponpes ?</button>
                    </div>
                    <div className={s.card_body}>
                        <h4>Free Tools</h4>
                        <p>Di hackathon santri kali ini, peserta akan mendapat akun AWS educate gratis dan tentunya solusi AWS akan memberimu kekuatan penuh untuk mewujudkan mimpimu</p>
                        <button>Emang Dapet Apa Aja ?</button>
                    </div>
                    <div className={s.card_body}>
                        <h4>And Many More</h4>
                        <p>Dan tentunya, di hackathon santri kali ini banyak sekali benefit yang kamu dapatkan, mulai dari teman baru hingga insight dan skill juga akan kamu dapatkan</p>
                        <button>Let's Rock</button>
                    </div>
                </div>
            </div>
            <div className={s.timeline_wrapper}>
                <h2 className={s.sponsor_title}>Timeline</h2>
                <div className={s.timeline_component}>
                    <Chrono mode="VERTICAL_ALTERNATING" hideControls="100" theme={{ primary: "white", secondary: "#3e64ff" }} items={items} />
                </div>
            </div>
            <div className={s.sponsor_wrapper}>
                <h2 className={s.sponsor_title}>Our Sponsors</h2>
                <h4 className={s.sponsor_subtitle}>Making This Hackathon Possible</h4>
                <div className={s.placeholder_wrapper}>
                    <img src="https://d1.awsstatic.com/WWPS/AWS_Educate_Logo2.ff6bf9db3e3202fb1fa50e7062a0ef12b4897a30.png" alt="" className={s.aws_placeholder} />
                    <img src="https://avatars2.githubusercontent.com/u/36590366?s=200&v=4" alt="" className={s.pasdev_placeholder} />
                </div>
            </div>
        </div>
    )
}

export default TesBanner