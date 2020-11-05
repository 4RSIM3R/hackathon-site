import styles from '../styles/Home.module.css'
import Header from '../components/home/Header'
import Banner from '../components/home/Banner'
import Footer from '../components/home/Footer'
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
