import { useState } from 'react';
import Navbar from '../components/Navbar';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);

    function handleClick(index) {
        if (board[index]) return;

        const updatedBoard = [...board];

        updatedBoard[index] = xTurn ? 'X' : 'O';

        setBoard(updatedBoard);

        setXTurn(!xTurn);
    }

    return (
        <div className="page">
            <Navbar />

            <h1>Tic Tac Toe</h1>

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
        </div>
    );
}

export default TicTacToe;