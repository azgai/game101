import { Link } from 'react-router-dom';

function GameCard({ title, link }) {
    return (
        <Link to={link}>
            <button className="game-button">
                {title}
            </button>
        </Link>
    );
}

export default GameCard;