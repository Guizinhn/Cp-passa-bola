import React from 'react';
import { Header } from '../components/Header';
import { useTeams } from '../contexts/TeamsContext';
import { UsersIcon, MapPinIcon, MailIcon, PhoneIcon, CalendarIcon, TrashIcon } from 'lucide-react';

export const RegisteredTeams = () => {
  const { teams, removeTeam } = useTeams();

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
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <UsersIcon size={24} className="text-white mr-2" />
                    <span className="text-white font-semibold text-lg">
                      {teams.length} {teams.length === 1 ? 'Time Cadastrado' : 'Times Cadastrados'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team) => (
                  <div key={team.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{team.teamName}</h3>
                      <button
                        onClick={() => removeTeam(team.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                        title="Remover time"
                      >
                        <TrashIcon size={18} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <UsersIcon size={16} className="mr-2 text-purple-400" />
                        <span className="text-sm">{team.contactPerson}</span>
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
                      
                      {team.additionalInfo && (
                        <div className="mt-3 pt-3 border-t border-gray-700">
                          <p className="text-gray-300 text-sm">{team.additionalInfo}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
