import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, LockIcon } from 'lucide-react';
import { SoccerBallIcon } from '../components/icons/SoccerBallIcon';
export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', {
      email,
      password
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="text-white font-bold text-3xl flex items-center justify-center">
              <span className="text-purple-400">PASSA</span> A{' '}
              <span className="text-purple-400">BOLA</span>
            </div>
          </Link>
          <div className="mt-4 text-white opacity-50 w-16 h-16 mx-auto">
            <SoccerBallIcon />
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Entre na Sua Conta
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon size={18} className="text-gray-400" />
                </div>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-700 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="seu@email.com" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon size={18} className="text-gray-400" />
                </div>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-700 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="••••••••" required />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Entrar
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-500 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Lembrar-me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-purple-300 hover:text-purple-200">
                  Esqueceu a senha?
                </a>
              </div>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-purple-300 hover:text-purple-200 font-medium">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-400 hover:text-white text-sm">
            ← Voltar para o Início
          </Link>
        </div>
      </div>
    </div>;
};