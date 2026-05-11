import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);

    // multiplayer or computer
    const [gameMode, setGameMode] = useState(null);

    // check winner
    function checkWinner(currentBoard) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;

            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }

        return null;
    }

    const winner = checkWinner(board);

    // player move
    function handleClick(index) {
        if (board[index] || winner) return;

        // prevent player from clicking during computer turn
        if (gameMode === 'computer' && !xTurn) return;

        const updatedBoard = [...board];
        updatedBoard[index] = xTurn ? 'X' : 'O';

        setBoard(updatedBoard);
        setXTurn(!xTurn);
    }

    // computer move
    useEffect(() => {
        if (
            gameMode === 'computer' &&
            !xTurn &&
            !winner
        ) {
            const emptyCells = board
                .map((cell, index) => (cell === null ? index : null))
                .filter((value) => value !== null);

            if (emptyCells.length > 0) {
                const randomIndex =
                    emptyCells[Math.floor(Math.random() * emptyCells.length)];

                setTimeout(() => {
                    const updatedBoard = [...board];
                    updatedBoard[randomIndex] = 'O';

                    setBoard(updatedBoard);
                    setXTurn(true);
                }, 500);
            }
        }
    }, [board, xTurn, gameMode, winner]);

    // restart game
    function resetGame() {
        setBoard(Array(9).fill(null));
        setXTurn(true);
    }

    return (
        <div className="page">
            <Navbar />

            <h1>Tic Tac Toe</h1>

            {/* Game Mode Buttons */}
            <div className="mode-buttons">
                <button
                    onClick={() => {
                        resetGame();
                        setGameMode('multiplayer');
                    }}
                >
                    Multiplayer
                </button>

                <button
                    onClick={() => {
                        resetGame();
                        setGameMode('computer');
                    }}
                >
                    Vs Computer
                </button>
            </div>

            {/* Turn / Winner */}
            <h2>
                {winner
                    ? `${winner} Wins!`
                    : `Turn: ${xTurn ? 'X' : 'O'}`}
            </h2>

            {/* Board */}
            <div className="board">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className="cell"
                        onClick={() => handleClick(index)}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            {/* Restart */}
            <button className="restart-btn" onClick={resetGame}>
                Restart Game
            </button>
        </div>
    );
}

export default TicTacToe;