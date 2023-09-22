"use client"

import React from 'react'
import { useState } from 'react'
import { Header } from '../componets/header/Header'
import PopUp from '../componets/popUp/PopUp'

export default function rotaTeste() {

    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState('')
    const [popUpType, setPopUpType] = useState('')

    function handlePopUp(type, message, time) {
        setShowPopUp(true)
        setPopUpMessage(message)
        setPopUpType(type)
        setTimeout(() => {
            setShowPopUp(false)
        }, time || 3000)
    }

    return (
        <div>
            <Header />
            <div>
                <h1>Teste de rota</h1>
                <button onClick={() => handlePopUp('sucesso', 'Teste de sucesso', 6000)}>Sucesso</button>
                <button onClick={() => handlePopUp('error', 'Teste de erro', 3000)}>Erro</button>
                {
                    showPopUp && <PopUp typeColor={popUpType} messagem={popUpMessage}/>
                }
            </div>
        </div>
    )
}
