interface HeroProps {
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
}

export const Hero = ({
  onRegisterClick,
  onLearnMoreClick
}: HeroProps) => {
  return <section className="relative min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-gray-900/90 z-10"></div>
        <img src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" alt="Jogadoras de futebol feminino" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-12 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          PASSA A BOLA
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold text-purple-300 mb-6">
          Valorizando o Futebol Feminino
        </h2>
        <p className="text-gray-300 max-w-lg mb-8">
          Junte-se à comunidade que celebra o talento do futebol feminino.
          Cadastre seu time, acompanhe torneios e conecte-se com jogadoras e fãs
          em todo o país.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={onRegisterClick} className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md transition-colors">
            Cadastrar Seu Time
          </button>
          <button onClick={onLearnMoreClick} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>
      <div className="relative hidden lg:block">
       
      </div>
    </section>;
};