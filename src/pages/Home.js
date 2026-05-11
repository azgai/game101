import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import games from '../data/games';

function Home() {
    const categories = [
        'Puzzle Games',
        'Arcade Games',
        'Strategy Games',
        'Casual Games',
    ];

    return (
        <div className="page">
            <Navbar />

            <section className="hero">
                <h1>World of Pixels</h1>

                <p>
                    Welcome to the game room!
                </p>
            </section>

            {categories.map((category) => (
                <section key={category} className="category-section">
                    <h2>{category}</h2>

                    <div className="games-grid">
                        {games
                            .filter((game) => game.category === category)
                            .map((game) => (
                                <GameCard
                                    key={game.title}
                                    game={game}
                                />
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Home;





