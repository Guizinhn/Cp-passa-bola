import React, { useState } from "react";
import { X as XIcon, Mail as MailIcon, Lock as LockIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface LoginModalProps {
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      
    } catch (err) {
      
      console.error("Erro no login:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg shadow-xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Fechar modal"
        >
          <XIcon size={24} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Entrar</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon size={18} className="text-gray-400" />
              </div>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Senha
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon size={18} className="text-gray-400" />
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Entrar
            </button>
          </div>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-purple-300 hover:text-purple-200">
              Esqueceu sua senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
