import React, { useState } from "react";

const GameBoard = () => {
  const [gameState, setGameState] = useState("start");

  const startGame = () => {
    setGameState("playing");
  };

  const endGame = () => {
    setGameState("gameOver");
  };

  return (
    <div>
      <h1>Tower Realms Game</h1>
      {gameState === "start" && (
        <button onClick={startGame}>Start Game</button>
      )}
      {gameState === "playing" && (
        <div>
          <h2>Game is in progress...</h2>
          <button onClick={endGame}>End Game</button>
        </div>
      )}
      {gameState === "gameOver" && <h2>Game Over</h2>}
    </div>
  );
};

export default GameBoard;
