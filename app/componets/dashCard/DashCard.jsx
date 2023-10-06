import styles from './DashCard.module.css'
const DeshCard = ({titulo, valor, cor}) => {
    return (
        <>
        <div className={styles.card} style={{backgroundColor: cor}}>
                        <p className={styles.cardTitle}>{titulo}</p>
                        <p className={styles.cardValue}>{valor}</p>
                    </div>
        </>
    )
}

export default DeshCard