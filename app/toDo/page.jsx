"use client"
import ListItem from '../componets/listItem/ListItem'
import { useState } from 'react'
import styles from './toDo.module.css'
import { Header } from '../componets/header/Header'

export default function ToDoPage() {
    const [task, setTask] = useState('')
    const [tasksList, setTasksList] = useState([])

    function teste() {
        console.log(task)
    }
    const addTask = () => {
        if (task.trim() !== '') {
            setTasksList([...tasksList, task])
            setTask('')
        } else {
            throw new Error('Não é possível adicionar uma tarefa vazia')
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Header />
            </div>
            <div>
                <h1 className={styles.title}>To Do List</h1>

                <input type="text"
                    placeholder='Digite a tarefa'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />

                <button onClick={addTask}>Adicionar</button>

                <button onClick={teste}>Teste</button>
                <div>
                    {
                        tasksList.map((task, index) => {
                            return (
                                <ListItem childream={<div><p>{task}</p></div>}/>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}
