import { Link } from 'react-router-dom';

function GameCard({ game }) {
    return (
        <Link to={game.path} className="game-card">
            <div className="game-emoji">{game.emoji}</div>

            <h3>{game.title}</h3>

            <p>{game.category}</p>
        </Link>
    );
}

export default GameCard;