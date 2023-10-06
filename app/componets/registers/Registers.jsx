"use client"
import styles from './registers.module.css';
import ListaTrasacao from '@/models/ListaTransacao';
import Buttons from '../buttons/Buttuns';
import { useState } from 'react';

const listaTrasacao = new ListaTrasacao()

const Registers = ({ }) => {
    return (
        <>
            <div className={styles.registers}>
                {RegisterTipos("receita")}
                {RegisterTipos("despesa")}
            </div>
        </>
    )
}

function RegisterTipos(tipo){
    if (tipo == "receita") {
        return (
            <div className={styles.registrosreceitas}>
                <p className={styles.registrosreceitastitle}>Receitas Registradas</p>
                <div className={styles.registrosreceitaslist}>
                    {
                        listaTrasacao.historico.map((item) => 
                        {

                            return(item.type == 'receita' && (
                                    <div key={item.id} className={styles.registrosreceitasitem}>
                                        <p>{item.description}</p>
                                        <p className={styles.registrosreceitasitemvalue}>R$ {item.value}</p>

                                        <div className={styles.registrosreceitasitembuttons}>
                                            <Buttons tipo={'edit'} onClick={() => edit(item.id)} />
                                            <Buttons tipo={'delete'} onClick={() => exclude(item.id)} />

                                            </div>
                                            
                                        
                                    </div>
                                ))} )
                                            }
                                
                            
                        
                    </div>
                </div>
            

        )
    }else{
        return (
            <div className={styles.registrosdespesas}>
                <p className={styles.registrosdespesastitle}>Despesas Registradas</p>
                <div className={styles.registrosdespesaslist}>
                   {
                        listaTrasacao.historico.map((item) => 
                        {

                            return(item.type == 'despesa' && (
                                    <div key={item.id} className={styles.registrosreceitasitem}>
                                        <p>{item.description}</p>
                                        <p className={styles.registrosreceitasitemvalue}>R$ {item.value}</p>

                                        <div className={styles.registrosreceitasitembuttons}>
                                            <Buttons tipo={'edit'} onClick={() => edit(item.id)} />
                                            <Buttons tipo={'delete'} onClick={() => exclude(item.id)} />

                                            </div>
                                            
                                        
                                    </div>
                                ))} )
                   }
                </div>
            </div>
        )
    }
    
}
export default Registers