"use client"
import styles from '../page.module.css'
import { useState } from 'react'
import { Header } from '../componets/header/Header'

export default function Estado() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }
  const decrementar = () => {
    setContador(contador ? contador - 1 : 0);
  }
  const resetar = () => {   
    setContador(0);
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div>
        <p>Contagem: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={resetar}>Resetar</button>
        <h1 className={styles.title}>Estado</h1>
      </div>
    </div>
  )
}