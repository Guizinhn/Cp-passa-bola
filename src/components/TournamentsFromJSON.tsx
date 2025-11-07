import React, { useState } from 'react';
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, ChevronDownIcon } from 'lucide-react';

// Importação estática do JSON local (requisito Web Development - consumo de API local)
import tournamentsData from '../data/tournaments.json';

/**
 * Interface para os dados do torneio vindos do JSON
 */
interface Tournament {
  id: number;
  name: string;
  type: string;
  date: string;
  endDate: string;
  location: string;
  teams: number;
  status: string;
  prize: string;
  description: string;
  categories: string[];
  registeredTeams: number;
}

interface TournamentsData {
  tournaments: Tournament[];
  statistics: {
    totalTournaments: number;
    totalTeams: number;
    totalRegisteredTeams: number;
    totalPrizeMoney: number;
    categories: Record<string, number>;
  };
}

/**
 * Componente que consome dados de um JSON local
 * Este componente demonstra o consumo de API local (requisito Web Development)
 * Usa importação estática do JSON para garantir funcionamento correto no Vite
 */
export const TournamentsFromJSON: React.FC = () => {
  // Dados do JSON importados estaticamente
  const data = tournamentsData as TournamentsData;
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  /**
   * Manipulação de evento de clique para mostrar detalhes do torneio
   * Demonstra criação de eventos (requisito Web Development)
   */
  const handleTournamentClick = (tournament: Tournament) => {
    // Manipulação controlada do DOM via React
    setSelectedTournament(selectedTournament?.id === tournament.id ? null : tournament);
    
    // Scroll suave para o elemento selecionado (manipulação de DOM)
    const element = document.getElementById(`tournament-${tournament.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  /**
   * Manipulação de evento de filtro
   */
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
    setSelectedTournament(null);
  };

  /**
   * Filtrar torneios baseado no tipo selecionado
   */
  const filteredTournaments = data.tournaments.filter(tournament => {
    if (filterType === 'all') return true;
    return tournament.type === filterType;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      {/* Estatísticas gerais - CSS Grid Container (requisito Front-end Design) */}
      <div className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Estatísticas dos Torneios</h2>
        {/* CSS Grid Container - Grid Items para estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-3xl font-bold">{data.statistics.totalTournaments}</div>
            <div className="text-sm opacity-90">Torneios</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{data.statistics.totalTeams}</div>
            <div className="text-sm opacity-90">Vagas Disponíveis</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{data.statistics.totalRegisteredTeams}</div>
            <div className="text-sm opacity-90">Times Inscritos</div>
          </div>
          <div>
            <div className="text-3xl font-bold">R$ {(data.statistics.totalPrizeMoney / 1000).toFixed(0)}k</div>
            <div className="text-sm opacity-90">Prêmios Totais</div>
          </div>
        </div>
      </div>

      {/* Filtro */}
      <div className="mb-6">
        <label htmlFor="filter" className="block text-white font-medium mb-2">
          Filtrar por tipo:
        </label>
        <select
          id="filter"
          value={filterType}
          onChange={handleFilterChange}
          className="bg-gray-800 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
        >
          <option value="all">Todos</option>
          <option value="regional">Regional</option>
          <option value="national">Nacional</option>
        </select>
      </div>

      {/* CSS Grid Container com Grid Items - Demonstração explícita do requisito Front-end Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTournaments.map((tournament) => (
          <div
            key={tournament.id}
            id={`tournament-${tournament.id}`}
            className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
              selectedTournament?.id === tournament.id
                ? 'border-purple-500 scale-105 shadow-2xl'
                : 'border-gray-700 hover:border-purple-400 hover:scale-102'
            }`}
            onClick={() => handleTournamentClick(tournament)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white flex-1">{tournament.name}</h3>
              {tournament.type === 'national' && (
                <TrophyIcon className="text-yellow-400 ml-2" size={20} />
              )}
            </div>

            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {tournament.description}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-300 text-sm">
                <CalendarIcon size={16} className="mr-2 text-purple-400" />
                <span>{new Date(tournament.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPinIcon size={16} className="mr-2 text-blue-400" />
                <span>{tournament.location}</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <UsersIcon size={16} className="mr-2 text-green-400" />
                <span>{tournament.registeredTeams}/{tournament.teams} Times</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {tournament.type === 'national' ? 'Nacional' : 'Regional'}
              </span>
              <span className="text-yellow-400 font-bold text-sm">{tournament.prize}</span>
            </div>

            {/* Detalhes expandidos */}
            {selectedTournament?.id === tournament.id && (
              <div className="mt-4 pt-4 border-t border-gray-700 animate-fade-in">
                <div className="space-y-2">
                  <p className="text-white text-sm">
                    <span className="font-semibold">Data de término:</span>{' '}
                    {new Date(tournament.endDate).toLocaleDateString('pt-BR')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-gray-300 text-sm font-semibold">Categorias:</span>
                    {tournament.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <button
                    className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Inscrição para ${tournament.name} será processada!`);
                    }}
                  >
                    Inscrever-se
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTournaments.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl">Nenhum torneio encontrado para o filtro selecionado.</p>
        </div>
      )}
    </div>
  );
};

