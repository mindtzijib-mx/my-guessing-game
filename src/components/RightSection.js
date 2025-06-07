function RightSection({ message, score, highscore }) {
  return (
    <section className="right">
      <p className="message">{message}</p>
      <p className="label-score">
        💯 Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{highscore}</span>
      </p>
    </section>
  );
}

export default RightSection;
