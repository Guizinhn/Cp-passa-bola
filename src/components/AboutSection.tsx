import React from 'react';
import { UsersIcon, TrophyIcon, MessageCircleIcon } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Seção Principal - Sobre Nós */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Passa a Bola: A Paixão Pelo Futebol Feminino
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Nossa missão é impulsionar o futebol feminino, criando um ecossistema vibrante onde times possam competir, se conectar e evoluir. Acreditamos no poder do esporte para transformar vidas e comunidades.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
           O Passa a Bola tem sido um ponto de encontro para atletas, treinadores e fãs que compartilham o amor pelo esporte. Nossa plataforma é dedicada a celebrar conquistas, fomentar o crescimento e garantir que cada jogadora tenha seu lugar de destaque.
          </p>
        </div>

        {/* Nossas Fundadoras */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Conheça Nossas Fundadoras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Alê Xavier */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out">
              <div className="w-40 h-40 bg-purple-700 rounded-full flex items-center justify-center mb-6 overflow-hidden border-4 border-purple-500">
                <img src="/placeholder-fundadora1.jpg" alt="Alê Xavier" className="object-cover w-full h-full" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-3">Alê Xavier</h4>
              <p className="text-purple-200 text-sm italic mb-4">Visionária e Comentarista Esportiva</p>
              <p className="text-gray-400 max-w-xs leading-relaxed">
                Reconhecida por sua voz ativa no futebol feminino, Alê Xavier é influenciadora e comentarista. Sua experiência e paixão são pilares para a missão de Passa a Bola, conectando o esporte a um público cada vez maior.
              </p>
            </div>
            {/* Luana Maluf */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out">
              <div className="w-40 h-40 bg-blue-700 rounded-full flex items-center justify-center mb-6 overflow-hidden border-4 border-blue-500">
                <img src="/placeholder-fundadora2.jpg" alt="Luana Maluf" className="object-cover w-full h-full" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-3">Luana Maluf</h4>
              <p className="text-blue-200 text-sm italic mb-4">Jornalista e Defensora do Esporte</p>
              <p className="text-gray-400 max-w-xs leading-relaxed">
                Jornalista e comentarista, Luana Maluf traz uma perspectiva única para os debates sobre futebol feminino, cultura e gênero. Sua dedicação em dar visibilidade ao esporte é fundamental para o crescimento da nossa comunidade.
              </p>
            </div>
          </div>
        </div>

        {/* Imagem da Equipe em Geral */}
        <div className="flex flex-col items-center text-center mt-16 mb-20">
          <h4 className="text-3xl font-bold text-white mb-6">A Equipe Por Trás do Passa a Bola</h4>
          <p className="text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Por trás de cada gol, cada torneio e cada conexão, há uma equipe dedicada trabalhando com paixão. Somos um time comprometido em impulsionar o futebol feminino e criar uma experiência inesquecível para todos.
          </p>
          <div className="w-full max-w-3xl h-80 bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl">
            <img src="/placeholder-equipe.jpg" alt="Equipe Passa a Bola" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Features / O Que Oferecemos */}
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          O Que Você Encontra no Passa a Bola
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg p-8 shadow-xl transform transition-transform hover:-translate-y-2 duration-300 ease-in-out border-t-4 border-purple-400">
            <div className="bg-white/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <UsersIcon size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">Comunidade Vibrante</h3>
            <p className="text-purple-100 text-center leading-relaxed">
              Cadastre seu time, encontre adversários e faça parte de uma rede exclusiva de atletas e entusiastas. O futuro do futebol feminino começa aqui!
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg p-8 shadow-xl transform transition-transform hover:-translate-y-2 duration-300 ease-in-out border-t-4 border-blue-400">
            <div className="bg-white/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <TrophyIcon size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">Torneios Emocionantes</h3>
            <p className="text-blue-100 text-center leading-relaxed">
              Participe ou acompanhe os melhores torneios. Tenha acesso a resultados, classificações e os momentos mais marcantes do esporte.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg p-8 shadow-xl transform transition-transform hover:-translate-y-2 duration-300 ease-in-out border-t-4 border-emerald-400">
            <div className="bg-white/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <MessageCircleIcon size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">Conexões Verdadeiras</h3>
            <p className="text-emerald-100 text-center leading-relaxed">
              Nossa plataforma de chat permite que você interaja com outros times, troque experiências e construa amizades duradouras dentro e fora de campo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};