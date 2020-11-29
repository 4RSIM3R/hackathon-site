import s from "../../styles/Tes.module.css";
import { useState } from "react";

const TesHeader = () => {
  const [visible, setvisible] = useState(true);
  return (
    <header className={s.header}>
      <img
        src="/logo.png"
        alt="Hackathon Santri 2021"
        srcset=""
        className={s.logo}
      />
      {visible && (
        <nav className={s.nav}>
          <a href="">Beranda</a>
          <a href="">Aturan Main</a>
          <a href="">FAQ</a>
          <a href="">Kontak Kami</a>
        </nav>
      )}
      <div className={s.hamburger_wrapper}>
        {visible ? (
          <svg
            onClick={(e) => setvisible(!visible)}
            width="24"
            height="24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              height="24"
              width="24"
              className={s.hamburger}
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              fill="#fff"
              fill-opacity="0.54"
            />
          </svg>
        ) : (
          <svg
            onClick={(e) => setvisible(!visible)}
            width="24"
            height="24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              height="24"
              width="24"
              className={s.hamburger}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 8V6h20v2H2zm0 3v2h20v-2H2zm0 5v2h20v-2H2z"
              fill="#fff"
              fill-opacity=".54"
            />
          </svg>
        )}
      </div>
      <div className={s.register_wrapper}>
        <button className={s.register}>Daftar</button>
      </div>
    </header>
  );
};

export default TesHeader;
