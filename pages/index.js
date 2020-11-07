import styles from "../styles/Home.module.css";
import styles_mobile from "../styles/mobile_home.module.css";
import Header from "../components/home/Header";
import Banner from "../components/home/Banner";
import Footer from "../components/home/Footer";
import MobileHeader from "../components/home/mobile/Header";
import MobileBanner from "../components/home/mobile/Banner";
import MobileFooter from "../components/home/mobile/Footer";
import { BrowserView, MobileView } from "react-device-detect";
export default function Home(props) {
  // if (isBrowser) {
  //   return (
  //     <div className={styles.main}>
  //       <div className={styles.section}>
  //         <Header />
  //         <Banner />
  //         <Footer />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className={styles_mobile.main}>
      <div className={styles_mobile.section}>
        <div className={styles_mobile.row}>
          <div className={styles_mobile.column}>
            <img
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              alt=""
              srcset=""
            />
          </div>
          <div className={styles_mobile.column}>
            <button>Register</button>
          </div>
        </div>
        <div>
          <div className={styles_mobile.grid_container}>
            <div className={styles_mobile.grid_item}>Test</div>
          </div>
        </div>
      </div>
    </div>
  );
}
