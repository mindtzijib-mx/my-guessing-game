# Guess My Number Game

This project is a simple number guessing game built with React. The game challenges players to guess a secret number between 1 and 20. Players start with a score of 20, and each incorrect guess decreases the score by 1. The game ends when the player guesses the correct number or the score reaches 0.

## Features

- **Interactive Gameplay**: Players can input their guesses and receive feedback such as "Too high!" or "Too low!".
- **Winning Condition**: When the player guesses the correct number, the game displays a congratulatory message and updates the high score if applicable.
- **Reset Functionality**: Players can reset the game at any time to start over with a new secret number and reset scores.
- **Dynamic Styling**: The background color and number display width change dynamically based on the game's state.

## Components

- **App**: The main component that manages the game's state and logic.
- **Header**: Displays the game title, reset button, and the secret number (hidden unless the player wins).
- **Main**: Contains the left and right sections for user input and game stats.
  - **LeftSection**: Allows players to input their guess and check it.
  - **RightSection**: Displays the current score, high score, and feedback messages.
- **Button**: A reusable button component used throughout the game.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

## Technologies Used

- **React**: For building the user interface and managing state.
- **CSS**: For styling the game layout and elements.

## Future Improvements

- Add difficulty levels with adjustable ranges for the secret number.
- Implement animations for better user experience.
- Add sound effects for feedback messages.

Enjoy playing and guessing the secret number!
