// Minimal scoring stub you can expand later.

export type GameInput = {
  homeTeam?: string;
  awayTeam?: string;
  // add any metrics you’ll score on
};

export function scoreGame(game: GameInput) {
  return {
    score: 0,
    reasons: [
      `Scoring stub for ${game.homeTeam ?? 'HOME'} vs ${game.awayTeam ?? 'AWAY'}`
    ]
  };
}
