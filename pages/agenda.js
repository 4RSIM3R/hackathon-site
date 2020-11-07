import styles from "../styles/Agenda.module.css";
import Header from "../components/home/Header";
import Schedule from "../components/agenda/schedule";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const Agenda = () => {
  const [tabIndex, settabIndex] = useState(1);

  if (isMobile) {
    return (
      <div className="">
        Gunakan Web Desktop untuk pengalaman yang lebih baik
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Header />
        <div className={styles.main_section}>
          <div className={styles.title_section}>
            <h1 className={styles.main_title}>
              {" "}
              Hackathon Santri{" "}
              <span className={styles.second_main_title}>Agenda</span>
            </h1>
            <p>
              Berikut ini adalah jadwal agenda yang akan dihelat pada hackathon
              santri. Mungkin saja jadwal nya akan berganti di lain waktu, stay
              tune terus yahh dengan info terbaru
            </p>
          </div>
          <div className={styles.agenda_section}>
            <div className={styles.agenda_tabs_header}>
              <div
                className={styles.agenda_tabs_header_title}
                onClick={(e) => settabIndex(1)}
              >
                <h2>Day 1</h2>
                <h5>Wed, November 17</h5>
                <hr
                  className={tabIndex === 1 ? styles.active : styles.inactive}
                />
              </div>
              <div
                className={styles.agenda_tabs_header_title}
                onClick={(e) => settabIndex(2)}
              >
                <h2>Day 2</h2>
                <h5>Wed, November 17</h5>
                <hr
                  className={tabIndex === 2 ? styles.active : styles.inactive}
                />
              </div>
              <div
                className={styles.agenda_tabs_header_title}
                onClick={(e) => settabIndex(3)}
              >
                <h2>Day 3</h2>
                <h5>Wed, November 17</h5>
                <hr
                  className={tabIndex === 3 ? styles.active : styles.inactive}
                />
              </div>
            </div>
            <Schedule tabIndex={tabIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
