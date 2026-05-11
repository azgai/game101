import { Link } from "react-router-dom";

function Profile() {
    return (
        <div className="page">
            <nav className="navbar">
                <h1>PROFILE</h1>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                </div>
            </nav>

            <div className="profile-container">
                <div className="profile-card">
                    <div className="avatar"></div>

                    <h2>Player One</h2>

                    <p>Games Played: 42</p>
                    <p>Wins: 18</p>
                    <p>Favorite Game: Snake</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;