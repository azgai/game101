import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function MemoryGame() {
    const cardImages = [
        '🍎',
        '🍌',
        '🍇',
        '🍒',
        '🍉',
        '🍍',
    ];

    // duplicate cards
    const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({
            id: index,
            emoji,
            flipped: false,
            matched: false,
        }));

    const [cards, setCards] = useState(shuffledCards);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [lockBoard, setLockBoard] = useState(false);

    function handleCardClick(index) {
        if (
            lockBoard ||
            cards[index].flipped ||
            cards[index].matched
        ) {
            return;
        }

        const updatedCards = [...cards];
        updatedCards[index].flipped = true;

        setCards(updatedCards);

        if (!firstCard) {
            setFirstCard(index);
        } else {
            setSecondCard(index);
            setLockBoard(true);
        }
    }

    useEffect(() => {
        if (firstCard !== null && secondCard !== null) {

            if (
                cards[firstCard].emoji ===
                cards[secondCard].emoji
            ) {

                setCards(prevCards =>
                    prevCards.map((card, index) => {

                        if (
                            index === firstCard ||
                            index === secondCard
                        ) {
                            return {
                                ...card,
                                matched: true,
                            };
                        }

                        return card;
                    })
                );

                resetTurn();

            } else {

                setTimeout(() => {

                    setCards(prevCards =>
                        prevCards.map((card, index) => {

                            if (
                                index === firstCard ||
                                index === secondCard
                            ) {
                                return {
                                    ...card,
                                    flipped: false,
                                };
                            }

                            return card;
                        })
                    );

                    resetTurn();

                }, 1000);
            }
        }
    }, [firstCard, secondCard, cards]);

    function resetTurn() {
        setFirstCard(null);
        setSecondCard(null);
        setLockBoard(false);
    }

    function restartGame() {
        const newCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((emoji, index) => ({
                id: index,
                emoji,
                flipped: false,
                matched: false,
            }));

        setCards(newCards);
        resetTurn();
    }

    const allMatched = cards.every(card => card.matched);

    return (
        <div className="page">
            <Navbar />

            <h1>Memory Game</h1>

            {allMatched && <h2>You Win!</h2>}

            <div className="memory-board">
                {cards.map((card, index) => (
                    <button
                        key={card.id}
                        className="memory-card"
                        onClick={() => handleCardClick(index)}
                    >
                        {card.flipped || card.matched
                            ? card.emoji
                            : '?'}
                    </button>
                ))}
            </div>

            <button
                className="restart-btn"
                onClick={restartGame}
            >
                Restart Game
            </button>
        </div>
    );
}

export default MemoryGame;