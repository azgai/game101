import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';

function Home() {
    return (
        <div className="page">
            <Navbar />

            <h1>Game Hub</h1>

            <p>Select a game below.</p>

            <div className="games-grid">
                <GameCard
                    title="Tic Tac Toe"
                    link="/tic-tac-toe"
                />

                <GameCard
                    title="Memory Game"
                    link="/memory-game"
                />
            </div>
        </div>
    );
}

export default Home;