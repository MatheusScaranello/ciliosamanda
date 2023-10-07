import Button from "../button/Button";
import { FaPen, FaTrash } from 'react-icons/fa'
import styles from './DashItem.module.css'

const Register = ({ id, value, description, color, deleteTransaction, edit}) => {


    
        return (

            <div className={styles.item} style={{backgroundColor: color}}>
                <div className={styles.item__description}>
                    <h3>{description}:</h3>
                </div>
                <div className={styles.item__value}>
                    <p className={styles.valuee}>€{value}</p>
                </div>
                <div className={styles.item__buttons}>
                    <Button
                        onClick={() => edit(id)}
                        className={styles.item__button}
                        text={<FaPen />}
                    />
                    <Button
                        onClick={() => deleteTransaction(id)}
                        className={styles.item__button}
                        text={<FaTrash />}
                    />
                </div>
            </div>
        )
    }

export default Register;