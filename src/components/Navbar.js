import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>

            <Link to="/tic-tac-toe">
                Tic Tac Toe
            </Link>

            <Link to="/memory">
                Memory Game
            </Link>
        </nav>
    );
}

export default Navbar;



