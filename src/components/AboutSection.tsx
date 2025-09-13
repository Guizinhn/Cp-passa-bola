import React from 'react';
import { UsersIcon, TrophyIcon, MessageCircleIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section className="py-20 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Sobre Passa a Bola
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Nossa missão é elevar o futebol feminino criando oportunidades para
          que os times compitam, se conectem e cresçam juntos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="bg-white/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <UsersIcon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Cadastre Seu Time
            </h3>
            <p className="text-purple-100">
              Junte-se à nossa comunidade cadastrando seu time e tenha acesso a
              torneios, recursos e oportunidades de networking.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="bg-white/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <TrophyIcon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Acompanhe Torneios
            </h3>
            <p className="text-blue-100">
              Mantenha-se atualizada com os últimos torneios regionais e
              nacionais, resultados de partidas, classificações e próximos
              eventos.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="bg-white/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <MessageCircleIcon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Conecte-se</h3>
            <p className="text-emerald-100">
              Interaja com outros times, treinadores e jogadoras através da
              nossa plataforma de chat para compartilhar experiências e
              construir relacionamentos.
            </p>
          </div>
        </div>
      </div>
    </section>;
};