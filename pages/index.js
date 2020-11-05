import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Header/>
        <Banner/>
        <Footer/>
      </div>
    </div>
  )
}
