import s from "../../styles/Tes.module.css";
import SiteMaps from "../utils/SiteMaps";

const TesFooter = () => {
  return (
    <div className={s.footer_section}>
      <div className={s.footer_content}>
        <div className={s.maps_wrapper}>
          <h3 className={s.maps_title}>Hackathon Locations</h3>
          <div className={s.maps_content}>
            <SiteMaps />
          </div>
        </div>
      </div>
      <div className={s.footer_content}>
        <div className={s.content_wrapper}>
          <h3 className={s.maps_title}>Nunggu Apa Lagi ?</h3>
          <p>
            Hackathon Santri 2021 adalah kompetisi hackathon yang pertama kali
            akan ada di pondok pesantren, indonesia, bahkan dunia. Lewat sini
            kami ingin mendekatkan lagi kata santri dan teknologi yang
            seringkali bertolak belakang. Dan menekankan peran santri pada
            perkembangan teknologi.
          </p>
          <div className={s.content_menu_wrapper}>
            <div className={s.content_menu_list}>
              <a href="">Facebook</a>
              <a href="">Twitter</a>
              <a href="">Instagram</a>
            </div>
            <div className={s.content_menu_list}>
              <a href="#home">Home</a>
              <a href="#getstarted">Get Started</a>
              <a href="">FAQ</a>
            </div>
            <div className={s.content_menu_list}>
              <a href="#sponsor">Sponsorship</a>
              <a href="#timeline">Timeline</a>
              <a href="https://linktr.ee/hackathonsantri">Contact Us</a>
            </div>
          </div>
          <p className={s.make_with}>Make With 💙 By Sanjos DEV</p>
        </div>
      </div>
    </div>
  );
};

export default TesFooter;
