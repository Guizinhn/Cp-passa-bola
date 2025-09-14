import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Player {
  id: string;
  name: string;
  cpf: string;
  position?: string;
  age?: number;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeTeamName: string;
  awayTeamName: string;
  date: Date;
  location: string;
  homeScore?: number;
  awayScore?: number;
  status: 'scheduled' | 'ongoing' | 'completed';
}

export interface Team {
  id: string;
  teamName: string;
  contactPerson: string;
  cpf: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  category: string;
  additionalInfo: string;
  players: Player[];
  registrationDate: Date;
}

interface TeamsContextType {
  teams: Team[];
  matches: Match[];
  addTeam: (team: Omit<Team, 'id' | 'registrationDate'>) => void;
  removeTeam: (id: string) => void;
  addPlayer: (teamId: string, player: Omit<Player, 'id'>) => void;
  removePlayer: (teamId: string, playerId: string) => void;
  addMatch: (match: Omit<Match, 'id'>) => void;
  updateMatch: (matchId: string, updates: Partial<Match>) => void;
  removeMatch: (matchId: string) => void;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

interface TeamsProviderProps {
  children: ReactNode;
}

export const TeamsProvider: React.FC<TeamsProviderProps> = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);

  const addTeam = (teamData: Omit<Team, 'id' | 'registrationDate'>) => {
    const newTeam: Team = {
      ...teamData,
      id: Date.now().toString(),
      registrationDate: new Date(),
    };
    setTeams(prevTeams => [...prevTeams, newTeam]);
  };

  const removeTeam = (id: string) => {
    setTeams(prevTeams => prevTeams.filter(team => team.id !== id));
    // Remove matches involving this team
    setMatches(prevMatches => prevMatches.filter(match => 
      match.homeTeamId !== id && match.awayTeamId !== id
    ));
  };

  const addPlayer = (teamId: string, playerData: Omit<Player, 'id'>) => {
    const newPlayer: Player = {
      ...playerData,
      id: Date.now().toString(),
    };
    setTeams(prevTeams => prevTeams.map(team => 
      team.id === teamId 
        ? { ...team, players: [...team.players, newPlayer] }
        : team
    ));
  };

  const removePlayer = (teamId: string, playerId: string) => {
    setTeams(prevTeams => prevTeams.map(team => 
      team.id === teamId 
        ? { ...team, players: team.players.filter(player => player.id !== playerId) }
        : team
    ));
  };

  const addMatch = (matchData: Omit<Match, 'id'>) => {
    const newMatch: Match = {
      ...matchData,
      id: Date.now().toString(),
    };
    setMatches(prevMatches => [...prevMatches, newMatch]);
  };

  const updateMatch = (matchId: string, updates: Partial<Match>) => {
    setMatches(prevMatches => prevMatches.map(match => 
      match.id === matchId ? { ...match, ...updates } : match
    ));
  };

  const removeMatch = (matchId: string) => {
    setMatches(prevMatches => prevMatches.filter(match => match.id !== matchId));
  };

  return (
    <TeamsContext.Provider value={{ 
      teams, 
      matches, 
      addTeam, 
      removeTeam, 
      addPlayer, 
      removePlayer, 
      addMatch, 
      updateMatch, 
      removeMatch 
    }}>
      {children}
    </TeamsContext.Provider>
  );
};

export const useTeams = (): TeamsContextType => {
  const context = useContext(TeamsContext);
  if (context === undefined) {
    throw new Error('useTeams must be used within a TeamsProvider');
  }
  return context;
};
