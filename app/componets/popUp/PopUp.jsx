import React from 'react'
import styles from './popUp.module.css'
import Message from '../message/Message'

const PopUpMenssage = ({messagem}) => {
    return (
        <div className={styles.container}>
            <Message message={messagem} />
        </div>
    )
}

export default PopUpMenssage