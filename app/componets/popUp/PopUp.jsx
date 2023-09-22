import React from 'react'
import styles from './popUp.module.css'

const PopUpMenssage = ({typeColor, messagem}) => {
    
    //let color = (typeColor === 'sucesso') ? styles.sucesso : styles.error
    let color = styles[typeColor]
    let container = styles.mainDiv + ' ' + color

    return (
        <div className={container}>
            <h1>{messagem}</h1>
        </div>
    )
}

export default PopUpMenssage