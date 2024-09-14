import React from 'react';
import styles from './Progress.module.css';

const Progress = ({ fails }) => {
    const hangmanParts = [
        <line className={styles.line} x1="1%" y1="95%" x2="99%" y2="95%"></line>,
        <line className={styles.line} x1="30%" y1="95%" x2="30%" y2="5%"></line>,
        <line className={styles.line} x1="30%" y1="5%" x2="70%" y2="5%"></line>,
        <line className={styles.line} x1="70%" y1="5%" x2="70%" y2="25%"></line>,
        <circle className={styles.circle} cx="70%" cy="30%" r="2%"></circle>,
        <line className={styles.line} x1="70%" y1="35%" x2="70%" y2="45%"></line>,
        <line className={styles.line} x1="70%" y1="45%" x2="68%" y2="55%"></line>,
        <line className={styles.line} x1="70%" y1="45%" x2="72%" y2="55%"></line>,
        <line className={styles.line} x1="70%" y1="38%" x2="68%" y2="46%"></line>,
        <line className={styles.line} x1="70%" y1="38%" x2="72%" y2="46%"></line>,
    ];

    return (
        <div className={styles.hangman}>
            <svg xmlns="http://www.w3.org/2000/svg">
                {hangmanParts.slice(0, fails)}
            </svg>
        </div>
    );
};

export default Progress;
