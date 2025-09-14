import React from 'react';
import { Match } from '../types/football';

interface MatchResultProps {
  match: Match;
}

const MatchResult: React.FC<MatchResultProps> = ({ match }) => {
  const matchDate = new Date(match.fixture.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const matchTime = new Date(match.fixture.date).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-3 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">{match.league.name} - {match.league.season}</span>
        <span className="text-sm text-gray-600">{match.fixture.status.long}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 w-5/12">
          <img src={match.teams.home.logo} alt={match.teams.home.name} className="w-8 h-8 object-contain" />
          <span className="font-semibold text-gray-800 text-lg">{match.teams.home.name}</span>
        </div>
        <div className="flex flex-col items-center justify-center w-2/12">
          <span className="text-2xl font-bold text-gray-900">
            {match.goals.home !== null ? match.goals.home : '-'} - {match.goals.away !== null ? match.goals.away : '-'}
          </span>
          <span className="text-xs text-gray-500">{match.fixture.status.short === 'HT' ? 'Intervalo' : ''}</span>
        </div>
        <div className="flex items-center space-x-2 justify-end w-5/12">
          <span className="font-semibold text-gray-800 text-lg">{match.teams.away.name}</span>
          <img src={match.teams.away.logo} alt={match.teams.away.name} className="w-8 h-8 object-contain" />
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-2">
        {matchDate} às {matchTime} - {match.fixture.venue.name}, {match.fixture.venue.city}
      </p>
    </div>
  );
};

export default MatchResult;