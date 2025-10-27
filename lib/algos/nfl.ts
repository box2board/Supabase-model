// Simple NFL scoring model
export interface GameMetrics {
  gameId: string;
  homeTeam: string;
  awayTeam: string;
  homeEpa: number;
  awayEpa: number;
  homeDvoa: number;
  awayDvoa: number;
  homeRest: number;
  awayRest: number;
  weatherImpact?: number; // 0..1 where 1 is severe weather
}

export interface ScoredGame extends GameMetrics {
  projSpreadHome: number;
  projTotal: number;
  confidence: number;
  tier: string;
}

// Score a game using a weighted combination of EPA, DVOA and rest
export function scoreGame(input: GameMetrics): ScoredGame {
  const epaDiff = input.homeEpa - input.awayEpa;
  const dvoaDiff = input.homeDvoa - input.awayDvoa;
  const restDiff = input.homeRest - input.awayRest;

  // Weights can be tuned
  const projSpreadHome = epaDiff * 0.5 + dvoaDiff * 0.3 + restDiff * 0.2;
  // Project total as sum of EPAs times a factor; adjust for weather impact if provided
  let projTotal = (input.homeEpa + input.awayEpa) * 24;
  if (input.weatherImpact) {
    projTotal = projTotal * (1 - input.weatherImpact * 0.2);
  }

  // Confidence based on magnitude of projected spread; cap at 100
  const confidence = Math.min(Math.round(Math.abs(projSpreadHome) * 10), 100);

  // Tier assignment
  let tier: string;
  if (confidence >= 80) tier = 'A';
  else if (confidence >= 60) tier = 'B';
  else if (confidence >= 40) tier = 'C';
  else tier = 'D';

  return {
    ...input,
    projSpreadHome,
    projTotal,
    confidence,
    tier,
  };
}
