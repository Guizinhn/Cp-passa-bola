import React, { useState } from 'react';
import { XIcon, UserIcon } from 'lucide-react';
import { useTeams } from '../contexts/TeamsContext';

interface AddPlayerModalProps {
  teamId: string;
  teamName: string;
  onClose: () => void;
}

export const AddPlayerModal = ({
  teamId,
  teamName,
  onClose
}: AddPlayerModalProps) => {
  const { addPlayer } = useTeams();
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    position: '',
    age: ''
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
    
    addPlayer(teamId, {
      name: formData.name,
      cpf: formData.cpf,
      position: formData.position || undefined,
      age: formData.age ? parseInt(formData.age) : undefined,
    });
    
    // Resetar o formulário
    setFormData({
      name: '',
      cpf: '',
      position: '',
      age: ''
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg shadow-xl w-full max-w-2xl p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <XIcon size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          Adicionar Jogadora
        </h2>
        <p className="text-gray-300 mb-6">
          Adicionar nova jogadora ao time <span className="text-purple-400 font-semibold">{teamName}</span>
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nome da Jogadora*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon size={18} className="text-gray-400" />
                </div>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                  placeholder="Nome completo" 
                  required 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-300 mb-1">
                CPF*
              </label>
              <input 
                id="cpf" 
                name="cpf" 
                type="text" 
                value={formData.cpf} 
                onChange={handleChange} 
                className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                placeholder="000.000.000-00" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">
                Posição
              </label>
              <select 
                id="position" 
                name="position" 
                value={formData.position} 
                onChange={handleChange} 
                className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                <option value="">Selecione uma posição</option>
                <option value="goleira">Goleira</option>
                <option value="zagueira">Zagueira</option>
                <option value="lateral">Lateral</option>
                <option value="volante">Volante</option>
                <option value="meia">Meia</option>
                <option value="atacante">Atacante</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">
                Idade
              </label>
              <input 
                id="age" 
                name="age" 
                type="number" 
                value={formData.age} 
                onChange={handleChange} 
                className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                placeholder="Idade" 
                min="12"
                max="50"
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
              Adicionar Jogadora
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
