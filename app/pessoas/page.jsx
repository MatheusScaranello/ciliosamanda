"use client"

import { useState } from 'react'
import livros from '../../data/livros'
import { Header } from '../componets/header/Header'

const HomePages = () => {
return(


   
<ul>
    <div>
        <div>
            <Header/>
        </div>
        <h1>Lista  de Livros</h1>
    {livros.map((livros) => (
        <li key={livros.id}>
            <h2> Titulo: {livros.titulo}</h2>
            <p>Lançamento: {livros.anos}</p>
            <p>Autor:{livros.autor}</p>
        </li>
    ))}
    </div>
</ul>
)


}
export default HomePages;