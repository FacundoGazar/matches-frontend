export interface Match {
  id: number;
  homeTeamId: number;
  homeTeam: string;
  homeScore: number;
  awayTeamId: number;
  awayTeam: string;
  awayScore: number;
  matchDate: string;
  week: string;
  day: string;
  matchTime: string;
  attendance: number;
  venue: string;
  referee: string;
}