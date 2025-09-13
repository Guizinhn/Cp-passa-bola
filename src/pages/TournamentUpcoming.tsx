import React, { useState } from 'react';
import { Header } from '../components/Header';
import { LoginModal } from '../components/LoginModal';
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react';
export const TournamentUpcoming = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const upcomingEvents = [{
    id: 1,
    title: 'Copa Regional de São Paulo',
    date: '15-22 de Outubro, 2023',
    location: 'São Paulo, SP',
    teams: 16,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'A copa regional anual reunindo os melhores times do estado de São Paulo.'
  }, {
    id: 2,
    title: 'Campeonato Carioca Feminino',
    date: '5-12 de Novembro, 2023',
    location: 'Rio de Janeiro, RJ',
    teams: 12,
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'O principal evento de futebol feminino no Rio de Janeiro com times de todo o estado.'
  }, {
    id: 3,
    title: 'Torneio Nacional Juvenil',
    date: '1-10 de Dezembro, 2023',
    location: 'Belo Horizonte, MG',
    teams: 24,
    image: 'https://images.unsplash.com/photo-1616041042832-24ee0dff18d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Apresentando as futuras estrelas do futebol feminino com times juvenis de todo o Brasil.'
  }, {
    id: 4,
    title: 'Copa Nordeste',
    date: '15-25 de Janeiro, 2024',
    location: 'Recife, PE',
    teams: 10,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'O campeonato nordestino com os melhores times da região.'
  }, {
    id: 5,
    title: 'Finais da Copa Brasil',
    date: '10-15 de Fevereiro, 2024',
    location: 'Brasília, DF',
    teams: 4,
    image: 'https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'O ponto culminante da competição nacional com os quatro finalistas disputando o título.'
  }, {
    id: 6,
    title: 'Torneio Internacional Amistoso',
    date: '5-12 de Março, 2024',
    location: 'Curitiba, PR',
    teams: 8,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Um torneio amistoso internacional com times do Brasil, Argentina, Chile e Colômbia.'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={() => setShowLoginModal(true)} />
      <div className="pt-24 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Próximos Eventos
          </h1>
          <p className="text-gray-300 mb-8">
            Descubra e inscreva-se para os próximos torneios em todo o Brasil
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => <div key={event.id} className="bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <CalendarIcon size={16} className="mr-2 text-purple-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPinIcon size={16} className="mr-2 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <UsersIcon size={16} className="mr-2 text-purple-400" />
                      <span>{event.teams} Times</span>
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Registrar Interesse
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>;
};