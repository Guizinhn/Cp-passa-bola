import { useState } from 'react';
import { Header } from '../components/Header';
import { useTeams } from '../contexts/TeamsContext';
import { AddPlayerModal } from '../components/AddPlayerModal';
import { MatchModal } from '../components/MatchModal';
import { UsersIcon, MapPinIcon, MailIcon, PhoneIcon, CalendarIcon, TrashIcon, UserPlusIcon, TrophyIcon } from 'lucide-react';

export const RegisteredTeams = () => {
  const { teams, matches, removeTeam, removePlayer } = useTeams();
  const [showAddPlayerModal, setShowAddPlayerModal] = useState(false);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState<string>('');
  const [selectedTeamName, setSelectedTeamName] = useState<string>('');

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getCategoryLabel = (category: string) => {
    const categories: { [key: string]: string } = {
      'adulto': 'Adulto 18+',
      'sub18': 'Sub-18',
      'sub16': 'Sub-16',
      'sub14': 'Sub-14',
      'sub12': 'Sub-12',
      'master': 'Master 35+',
      'veterano': 'Veterano 45+'
    };
    return categories[category] || category;
  };

  const openAddPlayerModal = (teamId: string, teamName: string) => {
    setSelectedTeamId(teamId);
    setSelectedTeamName(teamName);
    setShowAddPlayerModal(true);
  };

  const closeModals = () => {
    setShowAddPlayerModal(false);
    setShowMatchModal(false);
    setSelectedTeamId('');
    setSelectedTeamName('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={() => {}} />
      
      <div className="pt-24 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Times Cadastrados
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Conheça os times que fazem parte da nossa comunidade de futebol feminino
            </p>
          </div>

          {teams.length === 0 ? (
            <div className="text-center py-20">
              <UsersIcon size={64} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl text-gray-300 mb-2">Nenhum time cadastrado ainda</h3>
              <p className="text-gray-400">Seja o primeiro a cadastrar seu time!</p>
            </div>
          ) : (
            <>
              <div className="mb-8 flex flex-col sm:flex-row gap-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 flex-1">
                  <div className="flex items-center justify-center">
                    <UsersIcon size={24} className="text-white mr-2" />
                    <span className="text-white font-semibold text-lg">
                      {teams.length} {teams.length === 1 ? 'Time Cadastrado' : 'Times Cadastrados'}
                    </span>
                  </div>
                </div>
                
                {teams.length >= 2 && (
                  <button
                    onClick={() => setShowMatchModal(true)}
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-lg p-4 flex items-center justify-center transition-colors"
                  >
                    <TrophyIcon size={24} className="text-white mr-2" />
                    <span className="text-white font-semibold text-lg">
                      Agendar Partida
                    </span>
                  </button>
                )}
              </div>

              {/* CSS Grid Container - Demonstração explícita do requisito Front-end Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team) => (
                  <div key={team.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{team.teamName}</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openAddPlayerModal(team.id, team.teamName)}
                          className="text-green-400 hover:text-green-300 transition-colors"
                          title="Adicionar jogadora"
                        >
                          <UserPlusIcon size={18} />
                        </button>
                        <button
                          onClick={() => removeTeam(team.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Remover time"
                        >
                          <TrashIcon size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <UsersIcon size={16} className="mr-2 text-purple-400" />
                        <span className="text-sm">{team.contactPerson}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-300">
                        <span className="text-sm">CPF: {team.cpf}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-300">
                        <MapPinIcon size={16} className="mr-2 text-blue-400" />
                        <span className="text-sm">{team.city} - {team.state}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-300">
                        <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                          {getCategoryLabel(team.category)}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-300">
                        <MailIcon size={16} className="mr-2 text-green-400" />
                        <span className="text-sm">{team.email}</span>
                      </div>
                      
                      {team.phone && (
                        <div className="flex items-center text-gray-300">
                          <PhoneIcon size={16} className="mr-2 text-yellow-400" />
                          <span className="text-sm">{team.phone}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center text-gray-400">
                        <CalendarIcon size={16} className="mr-2" />
                        <span className="text-xs">
                          Cadastrado em {formatDate(team.registrationDate)}
                        </span>
                      </div>
                      
                      {team.players.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-700">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-white">
                              Jogadoras ({team.players.length})
                            </h4>
                          </div>
                          <div className="space-y-1 max-h-32 overflow-y-auto">
                            {team.players.map((player) => (
                              <div key={player.id} className="flex justify-between items-center text-xs text-gray-300 bg-gray-700/50 rounded px-2 py-1">
                                <div className="flex flex-col">
                                  <span className="font-medium">{player.name}</span>
                                  <span className="text-gray-400">CPF: {player.cpf}</span>
                                </div>
                                <div className="flex gap-1">
                                  {player.position && (
                                    <span className="text-blue-400">{player.position}</span>
                                  )}
                                  <button
                                    onClick={() => removePlayer(team.id, player.id)}
                                    className="text-red-400 hover:text-red-300"
                                    title="Remover jogadora"
                                  >
                                    <TrashIcon size={12} />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {team.additionalInfo && (
                        <div className="mt-3 pt-3 border-t border-gray-700">
                          <p className="text-gray-300 text-sm">{team.additionalInfo}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {matches.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Partidas Agendadas
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matches.map((match) => (
                      <div key={match.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border border-gray-700">
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {match.homeTeamName} vs {match.awayTeamName}
                          </h3>
                          <div className="flex items-center justify-center text-gray-300 mb-2">
                            <CalendarIcon size={16} className="mr-2" />
                            <span className="text-sm">
                              {formatDate(match.date)}
                            </span>
                          </div>
                          <div className="flex items-center justify-center text-gray-300">
                            <MapPinIcon size={16} className="mr-2" />
                            <span className="text-sm">{match.location}</span>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            match.status === 'scheduled' ? 'bg-blue-600 text-white' :
                            match.status === 'ongoing' ? 'bg-yellow-600 text-white' :
                            'bg-green-600 text-white'
                          }`}>
                            {match.status === 'scheduled' ? 'Agendada' :
                             match.status === 'ongoing' ? 'Em Andamento' : 'Finalizada'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {showAddPlayerModal && (
        <AddPlayerModal
          teamId={selectedTeamId}
          teamName={selectedTeamName}
          onClose={closeModals}
        />
      )}

      {showMatchModal && (
        <MatchModal onClose={closeModals} />
      )}
    </div>
  );
};
