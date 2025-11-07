import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { useTeams } from '../contexts/TeamsContext';
import { TrendingUpIcon, UsersIcon, TrophyIcon, MapPinIcon } from 'lucide-react';

/**
 * Página de Dashboard com gráficos dinâmicos
 * Demonstra dashboards dinâmicos (requisito Front-end Design)
 * Utiliza CSS Grid para layout responsivo (requisito Front-end Design)
 */
export const DashboardPage: React.FC = () => {
  const { teams, matches } = useTeams();
  const [dashboardData, setDashboardData] = useState<any>(null);

  /**
   * Manipulação de dados para os gráficos
   * Processa os dados dos times e partidas para criar visualizações
   */
  useEffect(() => {
    // Processar dados dos times por estado
    const teamsByState = teams.reduce((acc: Record<string, number>, team) => {
      acc[team.state] = (acc[team.state] || 0) + 1;
      return acc;
    }, {});

    // Processar dados dos times por categoria
    const teamsByCategory = teams.reduce((acc: Record<string, number>, team) => {
      acc[team.category] = (acc[team.category] || 0) + 1;
      return acc;
    }, {});

    // Dados para gráfico de times por estado
    const stateData = Object.entries(teamsByState)
      .map(([state, count]) => ({
        name: state,
        times: count
      }))
      .sort((a, b) => b.times - a.times)
      .slice(0, 5);

    // Dados para gráfico de times por categoria
    const categoryData = Object.entries(teamsByCategory).map(([category, count]) => {
      const categoryLabels: Record<string, string> = {
        'adulto': 'Adulto 18+',
        'sub18': 'Sub-18',
        'sub16': 'Sub-16',
        'sub14': 'Sub-14',
        'sub12': 'Sub-12',
        'master': 'Master 35+',
        'veterano': 'Veterano 45+'
      };
      return {
        name: categoryLabels[category] || category,
        value: count,
        category: category
      };
    });

    // Dados para gráfico de evolução (simulado)
    const evolutionData = [
      { mes: 'Jan', times: 5, partidas: 2 },
      { mes: 'Fev', times: 8, partidas: 4 },
      { mes: 'Mar', times: 12, partidas: 6 },
      { mes: 'Abr', times: 15, partidas: 8 },
      { mes: 'Mai', times: teams.length, partidas: matches.length }
    ];

    // Processar status das partidas
    const matchesByStatus = matches.reduce((acc: Record<string, number>, match) => {
      acc[match.status] = (acc[match.status] || 0) + 1;
      return acc;
    }, {});

    const statusData = Object.entries(matchesByStatus).map(([status, count]) => {
      const statusLabels: Record<string, string> = {
        'scheduled': 'Agendadas',
        'ongoing': 'Em Andamento',
        'completed': 'Finalizadas'
      };
      return {
        name: statusLabels[status] || status,
        value: count
      };
    });

    setDashboardData({
      stateData,
      categoryData,
      evolutionData,
      statusData,
      totalTeams: teams.length,
      totalMatches: matches.length,
      totalPlayers: teams.reduce((sum, team) => sum + team.players.length, 0)
    });
  }, [teams, matches]);

  // Cores para os gráficos
  const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6366f1'];

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <Header onLoginClick={() => {}} />
        <div className="flex items-center justify-center pt-32">
          <div className="text-white text-xl">Carregando dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={() => {}} />
      
      <div className="pt-24 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dashboard
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Visualização de dados e estatísticas da plataforma Passa a Bola
            </p>
          </div>

          {/* CSS Grid Container com Grid Items - Demonstração explícita do requisito Front-end Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">Total de Times</p>
                  <p className="text-white text-3xl font-bold mt-2">{dashboardData.totalTeams}</p>
                </div>
                <UsersIcon className="text-purple-200" size={40} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium">Total de Partidas</p>
                  <p className="text-white text-3xl font-bold mt-2">{dashboardData.totalMatches}</p>
                </div>
                <TrophyIcon className="text-blue-200" size={40} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-200 text-sm font-medium">Total de Jogadoras</p>
                  <p className="text-white text-3xl font-bold mt-2">{dashboardData.totalPlayers}</p>
                </div>
                <UsersIcon className="text-green-200" size={40} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-200 text-sm font-medium">Crescimento</p>
                  <p className="text-white text-3xl font-bold mt-2">
                    {dashboardData.evolutionData.length > 0 
                      ? ((dashboardData.evolutionData[dashboardData.evolutionData.length - 1].times / 
                          dashboardData.evolutionData[0].times - 1) * 100).toFixed(0) + '%'
                      : '0%'}
                  </p>
                </div>
                <TrendingUpIcon className="text-yellow-200" size={40} />
              </div>
            </div>
          </div>

          {/* CSS Grid Container para gráficos - Layout responsivo (requisito Front-end Design) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Gráfico de Barras - Times por Estado */}
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">Times por Estado (Top 5)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dashboardData.stateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #4b5563',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="times" fill="#8b5cf6" name="Quantidade de Times" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Gráfico de Pizza - Times por Categoria */}
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">Distribuição por Categoria</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dashboardData.categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dashboardData.categoryData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #4b5563',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico de Linha - Evolução */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">Evolução Mensal</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dashboardData.evolutionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                  <XAxis dataKey="mes" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #4b5563',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="times" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    name="Times"
                    dot={{ fill: '#8b5cf6', r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="partidas" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Partidas"
                    dot={{ fill: '#3b82f6', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Gráfico de Pizza - Status das Partidas */}
            {dashboardData.statusData.length > 0 && (
              <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold text-white mb-4">Status das Partidas</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={dashboardData.statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {dashboardData.statusData.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #4b5563',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* Informações adicionais */}
          <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Informações Gerais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <MapPinIcon className="text-purple-400" size={24} />
                <div>
                  <p className="text-gray-300 text-sm">Estados com Times</p>
                  <p className="text-white text-2xl font-bold">
                    {new Set(teams.map(t => t.state)).size}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <UsersIcon className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-300 text-sm">Média de Jogadoras/Time</p>
                  <p className="text-white text-2xl font-bold">
                    {teams.length > 0 
                      ? (dashboardData.totalPlayers / teams.length).toFixed(1)
                      : '0'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <TrophyIcon className="text-yellow-400" size={24} />
                <div>
                  <p className="text-gray-300 text-sm">Taxa de Ocupação</p>
                  <p className="text-white text-2xl font-bold">
                    {teams.length > 0 
                      ? ((matches.length / (teams.length * 0.5)) * 100).toFixed(0)
                      : '0'}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

