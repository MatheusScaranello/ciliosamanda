import styles from './BottaoEuQuero.module.css';
import React from 'react';

const whatssap = "https://wa.me/c/5519993324124"

const BottaoEuQuero = () => {
    return (
        <>
            <div className={styles.bottaoEuQuero}>
                <a href={whatssap} target="_blank" rel="noreferrer">
                    <p>SER UMA EMPRENDEDORA DE SUCESSO</p>
                    <button className={styles.bottaoEuQueroButton}>EU QUERO!</button>
                </a>
            </div>
        </>
    );
}

export default BottaoEuQuero;