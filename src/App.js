import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import TicTacToe from "./games/TicTacToe";
import MemoryGame from "./games/MemoryGame";
import SnakeGame from "./games/SnakeGame";
import PongGame from "./games/PongGame";
import HangmanGame from "./games/HangmanGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/memory" element={<MemoryGame />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/pong" element={<PongGame />} />
        <Route path="/hangman" element={<HangmanGame />} />
      </Routes>
    </Router>
  );
}

export default App;