"use client"
import styles from './page.module.css'
import { Header } from './componets/header/Header'
import { useState } from 'react'
import Message from './componets/message/Message'

export default function Home() {

  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  function addMessage() {
    setMessageList([...messageList, message])
    setMessage('')
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div>
        <h1 className={styles.title}>Home</h1>
      </div>
      <div>
        <input type="text"
          placeholder='Digite a mensagem'
          value={message}
          onChange={(e) => setMessage(e.target.value)} />

        <button onClick={addMessage}>Adicionar</button>

        <div>
          {
            messageList.map((message) => {
              return (
                <Message message={message} />
              )
            }
            )
          }
        </div>

      </div>
    </div>
  )
}
