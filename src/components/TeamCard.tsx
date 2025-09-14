import React from 'react';
import { TeamInfo } from '../types/football';

interface TeamCardProps {
  teamInfo: TeamInfo;
  onViewMatches: (teamId: number) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ teamInfo, onViewMatches }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 mb-4">
      <img src={teamInfo.team.logo} alt={`${teamInfo.team.name} logo`} className="w-16 h-16 object-contain" />
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{teamInfo.team.name}</h3>
        <p className="text-gray-600">{teamInfo.team.country}</p>
        <p className="text-sm text-gray-500">Fundado em: {teamInfo.team.founded}</p>
      </div>
      <button
        onClick={() => onViewMatches(teamInfo.team.id)}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Ver Jogos 2023
      </button>
    </div>
  );
};

export default TeamCard;