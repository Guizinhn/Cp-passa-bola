import React, { useState } from 'react';
import { Header } from '../components/Header';
import { LoginModal } from '../components/LoginModal';
export const TournamentNational = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const teams = [{
    position: 1,
    name: 'Corinthians',
    played: 20,
    won: 16,
    drawn: 3,
    lost: 1,
    points: 51
  }, {
    position: 2,
    name: 'São Paulo FC',
    played: 20,
    won: 15,
    drawn: 2,
    lost: 3,
    points: 47
  }, {
    position: 3,
    name: 'Palmeiras',
    played: 20,
    won: 14,
    drawn: 3,
    lost: 3,
    points: 45
  }, {
    position: 4,
    name: 'Flamengo',
    played: 20,
    won: 13,
    drawn: 4,
    lost: 3,
    points: 43
  }, {
    position: 5,
    name: 'Grêmio',
    played: 20,
    won: 12,
    drawn: 3,
    lost: 5,
    points: 39
  }, {
    position: 6,
    name: 'Internacional',
    played: 20,
    won: 11,
    drawn: 5,
    lost: 4,
    points: 38
  }, {
    position: 7,
    name: 'Santos',
    played: 20,
    won: 11,
    drawn: 2,
    lost: 7,
    points: 35
  }, {
    position: 8,
    name: 'Fluminense',
    played: 20,
    won: 9,
    drawn: 4,
    lost: 7,
    points: 31
  }, {
    position: 9,
    name: 'Atlético-MG',
    played: 20,
    won: 8,
    drawn: 6,
    lost: 6,
    points: 30
  }, {
    position: 10,
    name: 'Cruzeiro',
    played: 20,
    won: 8,
    drawn: 5,
    lost: 7,
    points: 29
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={() => setShowLoginModal(true)} />
      <div className="pt-24 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Campeonato Nacional
          </h1>
          <p className="text-gray-300 mb-8">
            Classificação atual no Campeonato Brasileiro de Futebol Feminino
          </p>
          <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-purple-900">
                    <th className="py-3 px-4 text-left text-white font-semibold">
                      Pos
                    </th>
                    <th className="py-3 px-4 text-left text-white font-semibold">
                      Time
                    </th>
                    <th className="py-3 px-4 text-center text-white font-semibold">
                      J
                    </th>
                    <th className="py-3 px-4 text-center text-white font-semibold">
                      V
                    </th>
                    <th className="py-3 px-4 text-center text-white font-semibold">
                      E
                    </th>
                    <th className="py-3 px-4 text-center text-white font-semibold">
                      D
                    </th>
                    <th className="py-3 px-4 text-center text-white font-semibold">
                      Pts
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, index) => <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} hover:bg-gray-600 transition-colors`}>
                      <td className="py-3 px-4 text-white">
                        <div className="flex items-center">
                          <span className={`
                            w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs font-bold
                            ${team.position <= 4 ? 'bg-green-600' : team.position <= 6 ? 'bg-blue-600' : team.position >= 9 ? 'bg-red-600' : 'bg-gray-600'}
                          `}>
                            {team.position}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium text-white">
                        {team.name}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-300">
                        {team.played}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-300">
                        {team.won}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-300">
                        {team.drawn}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-300">
                        {team.lost}
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-white">
                        {team.points}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-700 border-t border-gray-600">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-300">
                    Classificação Libertadores
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-300">
                    Copa Sul-Americana
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-300">
                    Zona de Rebaixamento
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg col-span-1 md:col-span-2">
              <h2 className="text-xl font-bold text-white mb-4">
                Notícias do Campeonato
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-white font-medium">
                    Corinthians Amplia Vantagem
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Com mais uma vitória impressionante neste fim de semana, o
                    Corinthians amplia sua vantagem na liderança da tabela.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-white font-medium">
                    Jovens Talentos do São Paulo
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Jovens talentos da base do São Paulo continuam fazendo ondas
                    no campeonato nacional.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-white font-medium">
                    Dificuldades do Santos Continuam
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Após mais uma derrota, o Santos precisará se reorganizar
                    para manter sua posição no meio da tabela.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">
                Melhores Times
              </h2>
              <div className="space-y-3">
                {teams.slice(0, 5).map((team, index) => <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-xs font-bold text-white mr-2">
                        {team.position}
                      </span>
                      <span className="text-white">{team.name}</span>
                    </div>
                    <span className="font-bold text-purple-300">
                      {team.points} pts
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>;
};