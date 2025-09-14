import React, { useState } from 'react';
import { XIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
import { useTeams } from '../contexts/TeamsContext';

interface MatchModalProps {
  onClose: () => void;
}

export const MatchModal = ({ onClose }: MatchModalProps) => {
  const { teams, addMatch } = useTeams();
  const [formData, setFormData] = useState({
    homeTeamId: '',
    awayTeamId: '',
    date: '',
    time: '',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.homeTeamId === formData.awayTeamId) {
      alert('Os times não podem ser iguais!');
      return;
    }

    const homeTeam = teams.find(team => team.id === formData.homeTeamId);
    const awayTeam = teams.find(team => team.id === formData.awayTeamId);

    if (!homeTeam || !awayTeam) {
      alert('Times não encontrados!');
      return;
    }

    const matchDateTime = new Date(`${formData.date}T${formData.time}`);
    
    addMatch({
      homeTeamId: formData.homeTeamId,
      awayTeamId: formData.awayTeamId,
      homeTeamName: homeTeam.teamName,
      awayTeamName: awayTeam.teamName,
      date: matchDateTime,
      location: formData.location,
      status: 'scheduled'
    });
    
    // Resetar o formulário
    setFormData({
      homeTeamId: '',
      awayTeamId: '',
      date: '',
      time: '',
      location: ''
    });
    
    onClose();
  };

  const availableTeams = teams.filter(team => 
    team.id !== formData.homeTeamId && team.id !== formData.awayTeamId
  );

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg shadow-xl w-full max-w-2xl p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <XIcon size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6">
          Agendar Partida
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="homeTeamId" className="block text-sm font-medium text-gray-300 mb-1">
                Time da Casa*
              </label>
              <select 
                id="homeTeamId" 
                name="homeTeamId" 
                value={formData.homeTeamId} 
                onChange={handleChange} 
                className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                required
              >
                <option value="">Selecione o time da casa</option>
                {teams.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.teamName} ({team.city}/{team.state})
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="awayTeamId" className="block text-sm font-medium text-gray-300 mb-1">
                Time Visitante*
              </label>
              <select 
                id="awayTeamId" 
                name="awayTeamId" 
                value={formData.awayTeamId} 
                onChange={handleChange} 
                className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                required
              >
                <option value="">Selecione o time visitante</option>
                {teams.map(team => (
                  <option key={team.id} value={team.id} disabled={team.id === formData.homeTeamId}>
                    {team.teamName} ({team.city}/{team.state})
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                Data da Partida*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon size={18} className="text-gray-400" />
                </div>
                <input 
                  id="date" 
                  name="date" 
                  type="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                  required 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
                Horário*
              </label>
              <input 
                id="time" 
                name="time" 
                type="time" 
                value={formData.time} 
                onChange={handleChange} 
                className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                required 
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
              Local da Partida*
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPinIcon size={18} className="text-gray-400" />
              </div>
              <input 
                id="location" 
                name="location" 
                type="text" 
                value={formData.location} 
                onChange={handleChange} 
                className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                placeholder="Campo, quadra ou local da partida" 
                required 
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              type="button" 
              onClick={onClose} 
              className="mr-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md transition-colors"
            >
              Agendar Partida
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
