function Home() {
    const categories = [
        {
            title: "Arcade",
            games: [
                "Galaxy Rush",
                "Pixel Runner",
                "Neon Jump",
                "Retro Blaster",
                "Turbo Dash",
            ],
        },

        {
            title: "Puzzle",
            games: [
                "Mind Blocks",
                "Cube Logic",
                "Pattern Shift",
                "Brain Maze",
                "Color Match",
            ],
        },

        {
            title: "Memory",
            games: [
                "Flash Cards",
                "Sequence Recall",
                "Mind Pairs",
                "Quick Memory",
                "Echo Match",
            ],
        },

        {
            title: "Action",
            games: [
                "Shadow Strike",
                "Battle Zone",
                "Rapid Fire",
                "Steel Arena",
                "War Path",
            ],
        },

        {
            title: "Strategy",
            games: [
                "Empire Rise",
                "Tactical Grid",
                "Kingdom Siege",
                "Chess Wars",
                "Frontline",
            ],
        },
    ];

    return (
        <div className="app">
            {/* NAVBAR */}

            <nav className="navbar">
                <div className="logo">GAMEZONE</div>

                <div className="nav-links">
                    <button>Home</button>
                    <button>Games</button>
                    <button>Profile</button>
                </div>
            </nav>

            {/* HERO SECTION */}

            <section className="hero">
                <div className="hero-content">
                    <h1>WELCOME to the World-of-Pixels</h1>

                    <p>
                        Explore games and compete in the online-arcade.
                    </p>

                    <div className="hero-buttons">
                        <button>Play Now</button>
                        <button>Browse Games</button>
                    </div>
                </div>
            </section>

            {/* FEATURED SECTION */}

            <section className="featured-section">
                <h2>Featured Games</h2>

                <div className="featured-grid">
                    <div className="featured-card">
                        <h3>Galaxy Rush</h3>
                    </div>

                    <div className="featured-card">
                        <h3>Mind Blocks</h3>
                    </div>

                    <div className="featured-card">
                        <h3>Shadow Strike</h3>
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}

            <section className="categories-section">
                <h2>Game Categories</h2>

                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <div className="category-card" key={index}>
                            <h3>{category.title}</h3>

                            <div className="games-list">
                                {category.games.map((game, gameIndex) => (
                                    <button className="game-button" key={gameIndex}>
                                        {game}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}

            <footer className="footer">
                <div className="footer-content">
                    <h3>GAMEZONE</h3>

                    <div className="footer-links">
                        <span>About</span>
                        <span>Support</span>
                        <span>Contact</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;