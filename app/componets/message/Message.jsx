import styles from './message.module.css'

function Message(type) {
    if (type === 'correct') {
        return ('Campos preenchidos, pode enviar!!'
        )
    } else if (type === 'incorrect') {
        return ('Preencha todos os campos!!')
    } else {
        return ('Coloque menos de 8 letras!!')
    }
}

function VerificadMessage(message) {
    console.log(message);
    var type = ''
    Message(type);
    if (message) {
        return (
            type = 'correct'
        )
    } else {
        return (
            type = 'incorrect'
        )
    }
}

export default function MessageComponent({ message }) {

    var type = VerificadMessage(message)
    return (
        <div className={styles.message}>
            <p className={styles[type]}>{Message(type)}</p>
        </div> 
    )
}
