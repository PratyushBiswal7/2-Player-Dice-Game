function GameOverPage({ score1, score2 }) {
  const winner =
    score1 > score2
      ? "Player 1 Wins 🏆"
      : score2 > score1
      ? "Player 2 Wins 🏆"
      : "It's a Tie! 🤝";

  const handleReset = () => {
    window.location.reload(); // 🔄 refreshes the page
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-6">🎮 Game Over</h1>
      <h2 className="text-2xl font-semibold text-green-300 mb-4">{winner}</h2>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        🔁 Restart Game
      </button>
    </div>
  );
}

export default GameOverPage;
