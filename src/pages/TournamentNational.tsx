import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TeamCard from '../components/TeamCard';
import MatchResult from '../components/MatchResult';
import { useFootballData } from '../hooks/useFootballData';
import { TeamInfo } from '../types/football'; // Importe TeamInfo

function TournamentNational() {
  const { teams, matches, loading, error, searchTeams, fetchMatchesByTeam } = useFootballData();
  const [selectedTeam, setSelectedTeam] = useState<TeamInfo | null>(null);

  const handleSearch = (query: string) => {
    setSelectedTeam(null); // Limpa o time selecionado ao fazer nova busca
    searchTeams(query);
  };

  const handleViewMatches = (teamId: number, teamName: string) => {
    // Encontrar o TeamInfo completo para o time selecionado
    const foundTeam = teams.find(team => team.team.id === teamId);
    if (foundTeam) {
      setSelectedTeam(foundTeam);
      fetchMatchesByTeam(teamId, 2023); // Foca em 2023, como a API gratuita restringe
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Resultados de Futebol (2023)
        </h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <p className="text-center text-blue-600 text-lg">Carregando dados...</p>}
        {error && <p className="text-center text-red-600 text-lg">{error}</p>}

        {!loading && !error && teams.length === 0 && !selectedTeam && (
          <p className="text-center text-gray-500 text-lg">
            Use a barra de busca para encontrar seu time favorito.
          </p>
        )}

        {/* Exibe times encontrados */}
        {!selectedTeam && teams.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {teams.map((teamInfo) => (
              <TeamCard
                key={teamInfo.team.id}
                teamInfo={teamInfo}
                onViewMatches={(teamId) => handleViewMatches(teamId, teamInfo.team.name)}
              />
            ))}
          </div>
        )}

        {/* Exibe resultados de partidas do time selecionado */}
        {selectedTeam && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <img src={selectedTeam.team.logo} alt={selectedTeam.team.name} className="w-10 h-10 mr-3 object-contain" />
              Jogos de {selectedTeam.team.name} em 2023
              <button
                onClick={() => setSelectedTeam(null)}
                className="ml-auto px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors text-sm"
              >
                Voltar à busca
              </button>
            </h2>
            {matches.length > 0 ? (
              <div className="space-y-4">
                {matches
                  .sort((a, b) => new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime()) // Ordena por data mais recente
                  .map((match) => (
                    <MatchResult key={match.fixture.id} match={match} />
                  ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg">Nenhum jogo encontrado para este time em 2023.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TournamentNational;