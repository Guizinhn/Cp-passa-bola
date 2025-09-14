// Tipagens para a API-Football

export interface Team {
  id: number;
  name: string;
  logo: string;
  country: string;
  founded: number;
  national: boolean;
  code: string | null;
}

export interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

export interface TeamInfo {
  team: Team;
  venue: Venue;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export interface Goals {
  home: number | null;
  away: number | null;
}

export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals | null;
  penalty: Goals | null;
}

export interface Fixture {
  id: number;
  referee: string | null;
  timezone: string;
  date: string; // ISO string
  timestamp: number;
  periods: {
    first: number | null;
    second: number | null;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number | null;
  };
}

export interface Match {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  score: Score;
  events?: any[]; // Você pode tipar isso mais especificamente se precisar de eventos
}

// Respostas da API
export interface ApiResponse<T> {
  get: string;
  parameters: Record<string, string>;
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: T[];
}

export interface TeamSearchResponse {
  team: Team;
  venue: Venue;
}