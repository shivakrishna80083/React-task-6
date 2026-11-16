
import { useState } from "react";

function TicTacToe() {
  // Store 9 empty cells
  const [board, setBoard] = useState(Array(9).fill(""));

  // Store current player
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Store winner
  const [winner, setWinner] = useState(null);

  // Store draw status
  const [isDraw, setIsDraw] = useState(false);

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check winner
  const checkWinner = (updatedBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        return updatedBoard[a];
      }
    }

    return null;
  };

  // Handle cell click
  const handleClick = (index) => {
    // Prevent clicking filled cells or playing after game ends
    if (board[index] || winner || isDraw) {
      return;
    }

    const updatedBoard = [...board];

    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    // Check winner
    const gameWinner = checkWinner(updatedBoard);

    if (gameWinner) {
      setWinner(gameWinner);
    } else if (updatedBoard.every((cell) => cell !== "")) {
      setIsDraw(true);
    } else {
      // Switch player
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  // Restart game
  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="game-container">

      <div className="game-card">

        <h1>XO Game</h1>

        <p className="game-description">
          Play Tic-Tac-Toe with your friend!
        </p>

        {/* Game Status */}
        <div className="game-status">

          {winner ? (
            <h2 className="winner-message">
              🎉 Player {winner} Wins!
            </h2>
          ) : isDraw ? (
            <h2 className="draw-message">
              🤝 Game Draw!
            </h2>
          ) : (
            <h2>
              Player <span className={currentPlayer}>
                {currentPlayer}
              </span>'s Turn
            </h2>
          )}

        </div>

        {/* Game Board */}
        <div className="game-board">

          {board.map((cell, index) => (
            <button
              key={index}
              className={`game-cell ${cell}`}
              onClick={() => handleClick(index)}
              disabled={Boolean(cell) || Boolean(winner) || isDraw}
            >
              {cell}
            </button>
          ))}

        </div>

        {/* Restart Button */}
        <button
          className="restart-btn"
          onClick={handleRestart}
        >
          Restart Game
        </button>

      </div>

    </div>
  );
}

export default TicTacToe;
