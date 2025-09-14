import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Team {
  id: string;
  teamName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  category: string;
  additionalInfo: string;
  registrationDate: Date;
}

interface TeamsContextType {
  teams: Team[];
  addTeam: (team: Omit<Team, 'id' | 'registrationDate'>) => void;
  removeTeam: (id: string) => void;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

interface TeamsProviderProps {
  children: ReactNode;
}

export const TeamsProvider: React.FC<TeamsProviderProps> = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>([]);

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
  };

  return (
    <TeamsContext.Provider value={{ teams, addTeam, removeTeam }}>
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
