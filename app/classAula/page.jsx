import React from 'react';
import LivrosData from '../../data/livros';
import { Header } from '../componets/header/Header';
import Livros, {ListaLivros} from '../../models/livro';

function PageClass (){
    const minhaListaLivros = new Livros();


    LivrosData.map((livro) => {
        const novoLivro = new Livros(livro.id, livro.titulo, livro.autor, livro.anos);
        minhaListaLivros.add(novoLivro);
    });

    return (
        <div>
            <Header />
            <ListaLivros livros={minhaListaLivros} />
        </div>
    );
}

export default PageClass;
