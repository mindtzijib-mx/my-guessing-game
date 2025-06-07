import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [secretNumber, setSecretNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [guess, setGuess] = useState(""); // To control the input field
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState("#222");
  const [numberWidth, setNumberWidth] = useState("15rem");

  const handleCheck = () => {
    const numGuess = Number(guess);

    // When there is no input
    if (!numGuess) {
      setMessage("⛔️ No number!");
    }
    // When player wins
    else if (numGuess === secretNumber) {
      setMessage("🎉 Correct Number!");
      setBodyBackgroundColor("#60b347");
      setNumberWidth("30rem");
      if (score > highscore) {
        setHighscore(score);
      }
    }
    // When guess is wrong
    else if (numGuess !== secretNumber) {
      if (score > 1) {
        setMessage(numGuess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        setScore((prevScore) => prevScore - 1);
      } else {
        setMessage("💥 You lost the game!");
        setScore(0);
      }
    }
  };

  const handleAgain = () => {
    setScore(20);
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setMessage("Start guessing...");
    setGuess("");
    setBodyBackgroundColor("#222");
    setNumberWidth("15rem");
  };

  return (
    <div style={{ backgroundColor: bodyBackgroundColor }}>
      <Header
        onAgain={handleAgain}
        numberDisplay={message === "🎉 Correct Number!" ? secretNumber : "?"} // Show number only on win
        numberWidth={numberWidth}
      />
      <Main
        message={message}
        score={score}
        highscore={highscore}
        guess={guess}
        onGuessChange={(e) => setGuess(e.target.value)}
        onCheck={handleCheck}
      />
    </div>
  );
}

export default App;
