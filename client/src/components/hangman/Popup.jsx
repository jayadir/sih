import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ status, word, reset }) => {
    if (!status) return null;

    return (
        <div className={styles.popup}>
            <p className={styles.result}>You {status}!</p>
            <p className={styles.answer}>The answer was: {word}</p>
            <button className={styles.playAgainButton} onClick={reset}>
                Play again
            </button>
        </div>
    );
};

export default Popup;
