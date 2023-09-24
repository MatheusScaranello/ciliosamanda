"use client"

import React from 'react';
import LivrosData from '../../data/livros';
import { Header } from '../componets/header/Header';
import Livros, {LivroClass} from '../../models/livro';


export default function PageClass() {
    const teste =  new LivroClass('teste', 'teste', 1000);
    console.log(teste);

    const minhaListaLivros = new Livros();


    LivrosData.map((livro) => {
        const novoLivro = new LivroClass(livro.titulo, livro.autor, livro.paginas, livro.id);
        minhaListaLivros.add(novoLivro);
        console.log(minhaListaLivros);
    });

    return (
        <>
            <Header />
            <div className="container">
                <h1>Class</h1>
                <ul>
                    {minhaListaLivros.livros.map((livro) => (
                        <li key={livro.id}>
                            <h2>{livro.titulo}</h2>
                            <p>{livro.autor}</p>
                            <p>{livro.paginas}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
