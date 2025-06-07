import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Main({ message, score, highscore, guess, onGuessChange, onCheck }) {
  return (
    <main>
      <LeftSection
        guess={guess}
        onGuessChange={onGuessChange}
        onCheck={onCheck}
      />
      <RightSection message={message} score={score} highscore={highscore} />
    </main>
  );
}

export default Main;
