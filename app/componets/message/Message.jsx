import styles from './message.module.css'

function Message(type) {
    if (type === 'correct') {
        return ('Parabéns, você enviou com sucesso!!'
        )
    } else if (type === 'incorrect') {
        return ('Preencha todos os campos!!')
    } else {
        return ('Coloque menos de 8 letras!!')
    }
}

function VerificadMessage(message) {
    var type = ''
    Message(type);
    if (message.length > 8) {
        return (
            type = 'grande'
        )
    } else if (message) {
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
