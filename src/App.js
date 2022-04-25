import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login'
import GameLobby from './views/GameLobby'

import './App.css';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="gamelobby">Game Lobby</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="gamelobby">Game Lobby</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="gamelobby" element={<GameLobby />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
