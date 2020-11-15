import s from '../../styles/Tes.module.css'
import ReactPlayer from "react-player"

const TesBanner = () => {
    return (
        <div className={s.banner_wrapper}>
            <h1 className={s.banner_title}>Hackathon Santri 2021</h1>
            <h3 className={s.banner_subtitle}>Kompetisi untuk menjawab berbagai problem pesantren dengan solusi digital. <br /> <span>Menciptakan teknologi dan memberi solusi</span></h3>
            <ReactPlayer
                className={s.video_player}
                controls={true}
                url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
            />
            <div className={s.event_wrapper}>
                <h2 className={s.event_title}>Kenapa harus ikut?</h2>
                <div className={s.card_wrapper}>
                    <div className={s.card_body}>
                        <h4>Firstly At Ponpes</h4>
                        <p>Selamat kamu berkesempatan untuk berkontribusi di hackathon pertama yang di selenggarakan di ponpes. Jadi tunggu apalagi, kami tunggu solusimu</p>
                        <button>Hakcathon di ponpes ?</button>
                    </div>
                    <div className={s.card_body}>
                        <h4>Free Tools</h4>
                        <p>Di hackathon santri kali ini, peserta akan mendapat akun AWS educate gratis dan tentunya solusi AWS akan memberimu kekuatan penuh untuk mewujudkan mimpimu</p>
                        <button>Baca dulu aja disini</button>
                    </div>
                    <div className={s.card_body}>
                        <h4>And Many More</h4>
                        <p>Dan tentunya, di hackathon santri kali ini banyak sekali benefit yang kamu dapatkan, mulai dari teman baru hingga insight dan skill juga akan kamu dapatkan</p>
                        <button>Jangan lupa disini juga</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TesBanner