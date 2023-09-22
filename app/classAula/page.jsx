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

    console.log(minhaListaLivros);
    console.log(Livros);
    
    return(


   
        <ul>
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <h1>Lista  de Livros</h1>
                    {
                        minhaListaLivros.livros.map((livro) => {
                            return(
                                <div key={livro.id}>
                                    <h2>{livro.titulo}</h2>
                                    <h3>{livro.autor}</h3>
                                    <h4>{livro.anos}</h4>
                                </div>
                            )
                        })
                    }                
                </div>
            </div>
        </ul>
        )
}

export default PageClass;
