import Button from "./Button";

function Header({ onAgain, numberDisplay, numberWidth }) {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <Button className="again" onClick={onAgain}>
        Again!
      </Button>
      <div className="number" style={{ width: numberWidth }}>
        {numberDisplay}
      </div>
    </header>
  );
}

export default Header;
