"use client"

import { useState } from 'react'
import styles from './counter.module.css'

const Counter = ({valorPadrao, agregacao, valorMaximo, valorMinimo}) => {
    const [counter, setCounter] = useState(valorPadrao)


    const addCounter = () => {
        if(counter < valorMaximo){
            setCounter(counter + agregacao)
        }
    }
    const subCounter = () => {
        if(counter > valorMinimo){
            setCounter(counter - agregacao)
        }
    }

    return(
        <div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <h1>{counter}</h1>
                </div>
                <div className={styles.buttons}>
                    <button onClick={addCounter} className={styles.bnt}>+</button>
                    <button onClick={subCounter} className={styles.bnt}>-</button>
                </div>
            </div>
        </div>
    )
        
    }

export { Counter }
