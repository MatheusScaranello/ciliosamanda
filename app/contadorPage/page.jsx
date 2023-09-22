import styles from './contador.module.css'
import { Header } from '../componets/header/Header'
import { Counter } from '../componets/counter/Counter'


export default function Contato() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div>
        <h1 className={styles.title}>Contador</h1>
        <div>
          {
          <Counter valorPadrao={0} agregacao={1} valorMaximo={100} valorMinimo={0} />
          }
        </div>
      </div>
    </div>
  )
}
