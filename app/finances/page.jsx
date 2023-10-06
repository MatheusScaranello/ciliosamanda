"use client"
import { useState } from 'react'
import styles from './finances.module.css'
import { Header } from '../componets/header/Header'
import ListaTrasacao from '@/models/ListaTransacao'
import DeshCard from '../componets/dashCard/DashCard'

import { FaPen, FaTrash } from 'react-icons/fa'

const listaTrasacao = new ListaTrasacao()

console.log(listaTrasacao);
console.log(listaTrasacao.getHistorico());


function Finances() {
    // Inputs
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    //Dados da Classe
    const [lista, setLista] = useState(listaTrasacao.getHistorico());
    const [saldo, setSaldo] = useState(listaTrasacao.saldo);
    const [receitas, setReceitas] = useState(listaTrasacao.receitas);
    const [despesas, setDespesas] = useState(listaTrasacao.despesas);

    // Edição
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)

    // Funções

    const addReceita = () => {
        listaTrasacao.addTasacao(description, value, "receita")
        setDescription('')
        setValue('')

        setSaldo(listaTrasacao.saldo)
        setReceitas(listaTrasacao.receitas)
        setDespesas(listaTrasacao.despesas)
        setLista(listaTrasacao.getHistorico())

    }
    const addDespesa = () => {
        listaTrasacao.addTasacao(description, value, "despesa")
        setDescription('')
        setValue('')

        setSaldo(listaTrasacao.saldo)
        setReceitas(listaTrasacao.receitas)
        setDespesas(listaTrasacao.despesas)
        setLista(listaTrasacao.getHistorico())

    }

    const atualizarValores =() => {
        setSaldo(listaTrasacao.saldo)
        setReceitas(listaTrasacao.receitas)
        setDespesas(listaTrasacao.despesas)
        setLista(listaTrasacao.getHistorico()) 

        setDescription('')
        setValue('')
    }
 
    const exclude = (id) => {
        listaTrasacao.excluirTrasacao(id)

        atualizarValores()
    }
    const edit = (id) => {
        const transacao = listaTrasacao.getTrasacaoId(id)
        setDescription(transacao.description)
        setValue(transacao.value)
        setFlag(id)
        setEditButton(true)
    }
    const atualizar = () => {
        listaTrasacao.atualizarTrasacao(flag, description, value)

        atualizarValores()
        setEditButton(false)
    }
    return (
        <>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                <div className={styles.mainheader}>
                    <p className={styles.title}>Dashboard</p>
                    <div className={styles.transaction}>
                        <div className={styles.description}>
                            <input
                                className={styles.inputdescription}
                                value={description}
                                type="text"
                                name='description'
                                placeholder='Descrição'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input className={styles.inputdescription} value={value} type="number" name='description' placeholder='Valor (R$)' onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className={styles.type}>
                            {
                                editButton ? (
                                    <button className={styles.buttonAtualizar} onClick={() => atualizar()}>Atualizar</button>
                                ) : (
                                    <>
                                        <button className={styles.buttonreceita}  onClick={addReceita}>Receita</button>
                                        <button className={styles.buttondespesa} onClick={addDespesa}>Despesa</button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.infos}>
                    <DeshCard cor={"#9fc7e0;"} valor={saldo} titulo={"Saldo"}></DeshCard>
                    <DeshCard cor={"#9fe0b1;"} valor={receitas} titulo={"Receita"}></DeshCard>
                    <DeshCard cor={"#e09f9f;"} valor={despesas} titulo={"Despesas"}></DeshCard>
                </div>

                <div className={styles.registros}>
                    <div className={styles.registrosreceitas}>
                        <p className={styles.registrosreceitastitle}>Receitas Registradas</p>
                        <div className={styles.registrosreceitaslist}>
                            {
                                listaTrasacao.historico.map((item) => 
                                {
                                                        console.log(item.id);

                                    return(item.type == 'receita' && (
                                            <div key={item.id} className={styles.registrosreceitasitem}>
                                                <p>{item.description}</p>
                                                <p className={styles.registrosreceitasitemvalue}>R$ {item.value}</p>

                                                <div className={styles.registrosreceitasitembuttons}>
                                                    <button className={styles.actionsbutton} onClick={() => exclude(item.id)}><FaTrash /></button>
                                                    <button className={styles.actionsbutton} onClick={() => edit(item.id)}><FaPen /></button>
                                                    </div>
                                                    
                                                
                                            </div>
                                        ))} )
                                                    }
                                    
                                
                            
                        </div>
                    </div>

                    <div className={styles.registrosdespesas}>
                        <p className={styles.registrosdespesastitle}>Despesas Registradas</p>
                        <div className={styles.registrosdespesaslist}>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finances