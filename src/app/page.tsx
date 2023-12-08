import styles from './page.module.css'
import HomePage from './components/homePage/page'
import WebSocketComponent from './websocket/pages'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <WebSocketComponent />
    </main>
  )
}
