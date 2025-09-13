import React, { useState } from 'react';
import { Header } from '../components/Header';
import { LoginModal } from '../components/LoginModal';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export const TournamentRegional = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const data = [{
    name: 'São Paulo FC',
    matches: 12,
    wins: 9
  }, {
    name: 'Corinthians',
    matches: 12,
    wins: 8
  }, {
    name: 'Palmeiras',
    matches: 12,
    wins: 7
  }, {
    name: 'Santos',
    matches: 12,
    wins: 6
  }, {
    name: 'Flamengo',
    matches: 12,
    wins: 5
  }, {
    name: 'Fluminense',
    matches: 12,
    wins: 4
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={() => setShowLoginModal(true)} />
      <div className="pt-24 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Torneios Regionais
          </h1>
          <p className="text-gray-300 mb-8">
            Acompanhe o desempenho dos times em torneios regionais
          </p>
          <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Desempenho dos Times vs Partidas
            </h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip contentStyle={{
                  backgroundColor: '#333',
                  borderColor: '#555',
                  color: 'white'
                }} />
                  <Legend />
                  <Bar dataKey="matches" name="Total de Partidas" fill="#8884d8" />
                  <Bar dataKey="wins" name="Vitórias" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">Artilheiras</h2>
              <div className="space-y-3">
                {[{
                player: 'Marta Silva',
                team: 'São Paulo FC',
                goals: 7
              }, {
                player: 'Ana Carolina',
                team: 'Corinthians',
                goals: 6
              }, {
                player: 'Beatriz Souza',
                team: 'Palmeiras',
                goals: 5
              }, {
                player: 'Fernanda Lima',
                team: 'Santos',
                goals: 4
              }, {
                player: 'Gabriela Costa',
                team: 'Flamengo',
                goals: 4
              }].map((scorer, index) => <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-2">
                    <div>
                      <p className="text-white font-medium">{scorer.player}</p>
                      <p className="text-sm text-gray-400">{scorer.team}</p>
                    </div>
                    <div className="bg-purple-600 rounded-full px-3 py-1">
                      <span className="text-white font-bold">
                        {scorer.goals}
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">
                Próximas Partidas
              </h2>
              <div className="space-y-4">
                {[{
                home: 'São Paulo FC',
                away: 'Corinthians',
                date: '15 de Out, 2023',
                time: '15:00'
              }, {
                home: 'Palmeiras',
                away: 'Santos',
                date: '16 de Out, 2023',
                time: '16:30'
              }, {
                home: 'Flamengo',
                away: 'Fluminense',
                date: '17 de Out, 2023',
                time: '19:00'
              }, {
                home: 'Grêmio',
                away: 'Internacional',
                date: '18 de Out, 2023',
                time: '20:00'
              }].map((match, index) => <div key={index} className="bg-gray-700 bg-opacity-50 rounded-md p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {match.home}
                      </span>
                      <span className="text-gray-400 text-sm">vs</span>
                      <span className="text-white font-medium">
                        {match.away}
                      </span>
                    </div>
                    <div className="text-center mt-2 text-sm text-gray-300">
                      {match.date} • {match.time}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>;
};