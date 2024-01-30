import styles from './page.module.css'
import HomePage from './components/homePage/page'
import './globals.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  )
}
