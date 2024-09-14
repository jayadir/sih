import { useEffect, useState } from 'react';
import styles from './MemoryGame.module.css';  // Import CSS module
import SingleCard from './SingleCard';

// Array of articles with article numbers, content, and image URLs
const cardArticles = [
  { number: "Article 14", content: "Right to Equality...", src: "/img/article14.png", matched: false },
  { number: "Article 19", content: "Freedom of Speech...", src: "/img/article19.png", matched: false },
  // Other articles...
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [matchedArticle, setMatchedArticle] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardArticles, ...cardArticles]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setMatchedArticle(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.number === choiceTwo.number) {
        setMatchedArticle(choiceOne.content);
        setCards((prevCards) => prevCards.map((card) => card.number === choiceOne.number ? { ...card, matched: true } : card));
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className={styles.memoryGame}>
      <h1>Indian Constitution Article Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className={styles.cardGrid}>
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      {matchedArticle && (
        <div className={styles.matchedArticle}>
          <h2>Matched Article</h2>
          <p>{matchedArticle}</p>
        </div>
      )}
    </div>
  );
}

export default MemoryGame;
