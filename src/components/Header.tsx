import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header = ({ onLoginClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTournamentDropdown, setShowTournamentDropdown] = useState(false);

  const { user, logout } = useAuth();

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
        setShowTournamentDropdown(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Fechar menu quando a rota mudar
  useEffect(() => {
    setIsMenuOpen(false);
    setShowTournamentDropdown(false);
  }, []);

  return (
    <header className="w-full py-4 px-6 lg:px-12 bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-purple-400">PASSA</span> A{' '}
            <span className="text-purple-400">BOLA</span>
          </div>
        </Link>

        {/* Botão mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-purple-300 transition-colors">
            Início
          </Link>
          <div className="relative">
            <button
              className="text-white hover:text-purple-300 transition-colors flex items-center"
              onClick={() => setShowTournamentDropdown(!showTournamentDropdown)}
            >
              Torneios <ChevronDownIcon size={16} className="ml-1" />
            </button>
            {showTournamentDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                <Link
                  to="/tournaments/regional"
                  className="block px-4 py-2 text-sm text-white hover:bg-purple-700"
                >
                  Regional
                </Link>
                <Link
                  to="/tournaments/national"
                  className="block px-4 py-2 text-sm text-white hover:bg-purple-700"
                >
                  Nacional
                </Link>
                <Link
                  to="/tournaments/upcoming"
                  className="block px-4 py-2 text-sm text-white hover:bg-purple-700"
                >
                  Próximos Eventos
                </Link>
              </div>
            )}
          </div>
          <Link to="/teams" className="text-white hover:text-purple-300 transition-colors">
            Times
          </Link>
          <Link to="/chat" className="text-white hover:text-purple-300 transition-colors">
            Chat
          </Link>

          {user ? (
            <>
              <span className="text-white">Bem-vinda, {user.email}</span>
              <button
                onClick={logout}
                className="text-white hover:text-purple-300 transition-colors"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              onClick={onLoginClick}
              className="text-white hover:text-purple-300 transition-colors"
            >
              Entrar
            </button>
          )}
        </nav>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-md border-t border-purple-500/30 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <nav className="px-6 py-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            
            {/* Torneios Mobile */}
            <div className="border-b border-gray-700 pb-2">
              <button
                className="w-full text-left text-white hover:text-purple-300 transition-colors py-2 flex items-center justify-between"
                onClick={() => setShowTournamentDropdown(!showTournamentDropdown)}
              >
                Torneios <ChevronDownIcon size={16} className={`transition-transform ${showTournamentDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showTournamentDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/tournaments/regional"
                    className="block text-gray-300 hover:text-purple-300 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Regional
                  </Link>
                  <Link
                    to="/tournaments/national"
                    className="block text-gray-300 hover:text-purple-300 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nacional
                  </Link>
                  <Link
                    to="/tournaments/upcoming"
                    className="block text-gray-300 hover:text-purple-300 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Próximos Eventos
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/teams"
              className="block text-white hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Times
            </Link>
            <Link
              to="/chat"
              className="block text-white hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Chat
            </Link>

            {/* Autenticação Mobile */}
            <div className="border-b border-gray-700 pb-2">
              {user ? (
                <>
                  <div className="text-gray-300 py-2">
                    Bem-vinda, {user.email}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block text-white hover:text-purple-300 transition-colors py-2"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="block text-white hover:text-purple-300 transition-colors py-2"
                >
                  Entrar
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
