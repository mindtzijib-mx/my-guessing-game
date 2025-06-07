import Button from "./Button";

function LeftSection({ guess, onGuessChange, onCheck }) {
  return (
    <section className="left">
      <input
        type="number"
        className="guess"
        value={guess}
        onChange={onGuessChange}
      />
      <Button className="check" onClick={onCheck}>
        Check!
      </Button>
    </section>
  );
}

export default LeftSection;
