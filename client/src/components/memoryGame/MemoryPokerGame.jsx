import React, { useState, useEffect } from "react";
import styles from "./MemoryPokerGame.module.css";

const MemoryPokerGame = () => {
    const cardsData = [
        { id: 1, type: "article", content: "Article 14: Right to Equality", info: "Article 14 ensures equality before the law and equal protection of the laws within India." },
        { id: 2, type: "article", content: "Article 19: Freedom of Speech", info: "Article 19 guarantees freedom of speech and expression, assembly, association, and movement." },
        { id: 3, type: "article", content: "Article 21: Right to Life", info: "Article 21 protects life and personal liberty, except according to the procedure established by law." },
        { id: 4, type: "article", content: "Article 32: Right to Constitutional Remedies", info: "Article 32 allows individuals to move the Supreme Court to enforce their fundamental rights." },
        { id: 5, type: "article", content: "Article 44: Uniform Civil Code", info: "Article 44 aims to secure a uniform civil code for all citizens throughout the territory of India." },
        { id: 6, type: "article", content: "Article 51A: Fundamental Duties", info: "Article 51A lists the fundamental duties of every citizen of India." },
        { id: 7, type: "number", content: "14" },
        { id: 8, type: "number", content: "19" },
        { id: 9, type: "number", content: "21" },
        { id: 10, type: "number", content: "32" },
        { id: 11, type: "number", content: "44" },
        { id: 12, type: "number", content: "51A" },
      ];

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [dialogContent, setDialogContent] = useState(null);

  useEffect(() => {
    // Show all cards for the first 2 seconds
    const timer = setTimeout(() => {
      setShowAll(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);

      if (flippedCards.length === 1) {
        const firstCard = cardsData[flippedCards[0]];
        const secondCard = cardsData[index];

        if (
          (firstCard.type === "number" && secondCard.type === "article" && secondCard.content.includes(firstCard.content)) ||
          (secondCard.type === "number" && firstCard.type === "article" && firstCard.content.includes(secondCard.content))
        ) {
          setMatchedCards([...matchedCards, flippedCards[0], index]);
          setDialogContent(secondCard.type === "article" ? secondCard.info : firstCard.info);
        }
        
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const closeDialog = () => {
    setDialogContent(null);
  };

  return (
    <div className={styles.gameContainer}>
      <h2 className={styles.heading}>Memory Poker: Match Articles with Numbers</h2>

      {dialogContent && (
        <div className={styles.dialog}>
          <div className={styles.dialogContent}>
            <h3>Article Explanation</h3>
            <p>{dialogContent}</p>
            <button className={styles.closeButton} onClick={closeDialog}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${(flippedCards.includes(index) || matchedCards.includes(index) || showAll) ? styles.flipped : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={styles.cardFront}>
              {flippedCards.includes(index) || matchedCards.includes(index) || showAll ? card.content : "?"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryPokerGame;
