import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this for navigation
import Progress from './Progress';
import Popup from './Popup';
import styles from './hangman.module.css'; 

export default function Hangman() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const navigate = useNavigate(); // Initialize the hook for navigation

    const questions = useMemo(() => [
        { question: "What is the preamble of the Indian Constitution called?", answer: "Preamble" },
        { question: "Which part of the Indian Constitution deals with Fundamental Rights?", answer: "Part" },
        { question: "What is the highest court of India?", answer: "Supreme" },
        { question: "Who is known as the 'Father of the Indian Constitution'?", answer: "Ambedkar" },
        { question: "What is the official language of the Indian Constitution?", answer: "Hindi" },
        { question: "Which Article of the Indian Constitution guarantees freedom of speech?", answer: "Nineteen" },
        { question: "What is the term of the President of India?", answer: "Five" },
        { question: "Which Amendment Act added the word 'Secular' to the Preamble?", answer: "Fortysecond" },
        { question: "Which Article gives the right to Constitutional Remedies?", answer: "Thirtytwo" },
        { question: "Who has the authority to amend the Constitution of India?", answer: "Parliament" },
    ], []);

    const [corrects, setCorrects] = useState([]);
    const [fails, setFails] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [status, setStatus] = useState('');

    const maskWord = currentQuestion?.answer
        ?.split(' ')
        .map(word =>
            word.split('')
                .map(letter => corrects.includes(letter.toLowerCase()) ? letter : "_")
                .join(" ")
        )
        .join('   ');

    const onGuess = letter => {
        if (fails.length > 9 || status) return;
        const lowercaseLetter = letter.toLowerCase();
        if (currentQuestion.answer.toLowerCase().includes(lowercaseLetter)) {
            setCorrects([...corrects, lowercaseLetter]);
        } else {
            setFails([...fails, lowercaseLetter]);
        }
    };

    const randomizeQuestion = useCallback(() => {
        const random = questions[Math.floor(Math.random() * questions.length)];
        setCurrentQuestion(random);
        setCorrects([]);
        setFails([]);
        setStatus('');
    }, [questions]);

    const reset = () => randomizeQuestion();

    useEffect(() => randomizeQuestion(), [randomizeQuestion]);

    useEffect(() => {
        if (corrects.length && currentQuestion.answer.split("").every(letter => letter === " " || corrects.includes(letter.toLowerCase()))) {
            setStatus('win');
        }
    }, [corrects, currentQuestion.answer]);

    useEffect(() => {
        if (fails.length === 10) {
            setStatus('lose');
        }
    }, [fails]);

    return (
        <div className={styles.container}>
            {/* Go Back to Home Button */}
            <button className={styles.backButton} onClick={() => navigate('/')}>
                Home
            </button>
            
            <p className={styles.mask}>{maskWord}</p>
            <p className={styles.question}>{currentQuestion.question}</p>
            <div className={styles.alphabets}>
                {alphabets.map((letter, index) => (
                    <button
                        key={index}
                        className={styles.letterButton}
                        disabled={corrects.includes(letter.toLowerCase()) || fails.includes(letter.toLowerCase())}
                        onClick={() => onGuess(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <Progress fails={fails.length} />
            <Popup status={status} word={currentQuestion.answer} reset={reset} />
        </div>
    );
}
