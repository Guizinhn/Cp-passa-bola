import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import TeamCard from '../components/TeamCard';
import MatchResult from '../components/MatchResult';
import { useFootballData } from '../hooks/useFootballData';
import { TeamInfo } from '../types/football'; // Importe TeamInfo

function TournamentNational() {
  const { teams, matches, loading, error, searchTeams, fetchMatchesByTeam } = useFootballData();
  const [selectedTeam, setSelectedTeam] = useState<TeamInfo | null>(null);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSelectedTeam(null); // Limpa o time selecionado ao fazer nova busca
    searchTeams(query);
  };

  const handleViewMatches = (teamId: number) => {
    // Encontrar o TeamInfo completo para o time selecionado
    const foundTeam = teams.find(team => team.team.id === teamId);
    if (foundTeam) {
      setSelectedTeam(foundTeam);
      fetchMatchesByTeam(teamId, 2023); // Foca em 2023, como a API gratuita restringe
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar à Tela Inicial
            </button>
            <div className="flex-1 text-center">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
                Resultados de Futebol
              </h1>
              <p className="text-xl text-purple-200 font-medium">Temporada 2023</p>
            </div>
            <div className="w-40"></div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-400 border-t-transparent mb-4"></div>
            <p className="text-white text-xl font-medium">Carregando dados...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-6 border border-red-400/30 shadow-xl">
            <p className="text-red-200 text-center text-lg font-medium">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && teams.length === 0 && !selectedTeam && (
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
              <div className="text-6xl mb-4">⚽</div>
              <p className="text-white text-xl font-medium mb-2">
                Encontre seu time favorito
              </p>
              <p className="text-purple-200 text-lg">
                Use a barra de busca acima para encontrar times e ver seus resultados
              </p>
            </div>
          </div>
        )}

        {/* Teams Grid */}
        {!selectedTeam && teams.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">
                Times Encontrados
              </h2>
              <div className="text-purple-200 font-medium">
                {teams.length} resultado{teams.length !== 1 ? 's' : ''}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teams.map((teamInfo) => (
                <div key={teamInfo.team.id} className="transform transition-all duration-300 hover:scale-105">
                  <TeamCard
                    teamInfo={teamInfo}
                    onViewMatches={(teamId) => handleViewMatches(teamId)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Matches Section */}
        {selectedTeam && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            {/* Team Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center p-2">
                  <img 
                    src={selectedTeam.team.logo} 
                    alt={selectedTeam.team.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {selectedTeam.team.name}
                  </h2>
                  <p className="text-purple-200 text-lg">
                    Temporada 2023 • {matches.length} jogo{matches.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTeam(null)}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Voltar à busca
              </button>
            </div>

            {/* Matches List */}
            {matches.length > 0 ? (
              <div className="space-y-4">
                {matches
                  .sort((a, b) => new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime())
                  .map((match) => (
                    <div key={match.fixture.id} className="transform transition-all duration-300 hover:scale-[1.02]">
                      <MatchResult match={match} />
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <div className="text-6xl mb-4">🏆</div>
                  <p className="text-white text-xl font-medium mb-2">
                    Nenhum jogo encontrado
                  </p>
                  <p className="text-purple-200 text-lg">
                    Não foram encontrados jogos para este time na temporada 2023
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TournamentNational;