import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import NavLink from '../navLink/NavLink'

export const Header = () => {
    return (
        <aside className={styles.container}>
            <div>
                <Image src={'/logo-6dev-semfundo.png'}  alt='jorge' width={84} height={64}></Image>
            </div>
            <div className={styles.links}>
                <NavLink rota="/" texto="Home" />
                <NavLink rota="/estado" texto="Estado" />
                <NavLink rota="/toDo" texto="To Do List" />
                <NavLink rota="/rotaTeste" texto="Rota Teste" />
                <NavLink rota="/contadorPage" texto="Contador" />
                <NavLink rota="/pessoas" texto="Pessoas" />
                <NavLink rota="/classAula" texto="Livros" />
            </div>
        </aside>
    )
}