import { FaPen, FaTrash } from 'react-icons/fa'

const Buttons = ({ onClick, tipo }) => {
    return (
        <ButtonsTypes tipo={tipo} onClick={onClick} />
    )
}

function ButtonsTypes({ tipo, onClick }){
    if (tipo === 'delete') {
        return (
            <button onClick={onClick}><FaTrash/></button>
        )
    }
    if (tipo === 'edit') {
        return (
            <button onClick={onClick}><FaPen/></button>
        )
    }
    if (tipo === 'atualizar') {
        return (
            <button onClick={onClick}>Atualizar</button>
        )
    }
    if (tipo === 'add') {
        return (
            <button  onClick={onClick}>Receita</button>
        )
    }
    if (tipo === 'despesa') {
        return (
            <button  onClick={onClick}>Despesa</button>
        )
    }
}

export default Buttons
