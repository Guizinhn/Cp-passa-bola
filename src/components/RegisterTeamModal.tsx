import React, { useState } from 'react';
import { XIcon, UserIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { useTeams } from '../contexts/TeamsContext';

interface RegisterTeamModalProps {
  onClose: () => void;
}

export const RegisterTeamModal = ({
  onClose
}: RegisterTeamModalProps) => {
  const { addTeam } = useTeams();
  const [formData, setFormData] = useState({
    teamName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    category: '',
    additionalInfo: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Adicionar o time ao contexto
    addTeam({
      teamName: formData.teamName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      state: formData.state,
      category: formData.category,
      additionalInfo: formData.additionalInfo,
    });
    
    // Resetar o formulário
    setFormData({
      teamName: '',
      contactPerson: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      category: '',
      additionalInfo: ''
    });
    
    // Fechar o modal
    onClose();
  };
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg shadow-xl w-full max-w-3xl p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <XIcon size={24} />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">
          Cadastrar Seu Time
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-300 mb-1">
                Nome do Time*
              </label>
              <input id="teamName" name="teamName" type="text" value={formData.teamName} onChange={handleChange} className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="Nome do seu time" required />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-300 mb-1">
                Pessoa de Contato*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon size={18} className="text-gray-400" />
                </div>
                <input id="contactPerson" name="contactPerson" type="text" value={formData.contactPerson} onChange={handleChange} className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="Nome completo" required />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon size={18} className="text-gray-400" />
                </div>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="seu@email.com" required />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Telefone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon size={18} className="text-gray-400" />
                </div>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="(00) 00000-0000" />
              </div>
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
                Cidade*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon size={18} className="text-gray-400" />
                </div>
                <input id="city" name="city" type="text" value={formData.city} onChange={handleChange} className="bg-gray-800 text-white block w-full pl-10 pr-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="Sua cidade" required />
              </div>
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-1">
                Estado*
              </label>
              <select id="state" name="state" value={formData.state} onChange={handleChange} className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" required>
                <option value="">Selecione um estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                Categoria do Time*
              </label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" required>
                <option value="">Selecione uma categoria</option>
                <option value="adulto">Adulto 18+</option>
                <option value="sub18">Sub-18</option>
                <option value="sub16">Sub-16</option>
                <option value="sub14">Sub-14</option>
                <option value="sub12">Sub-12</option>
                <option value="master">Master 35+</option>
                <option value="veterano">Veterano 45+</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-1">
              Informações Adicionais
            </label>
            <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4} className="bg-gray-800 text-white block w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="Compartilhe mais informações sobre seu time..."></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors">
              Cancelar
            </button>
            <button type="submit" className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md transition-colors">
              Cadastrar Time
            </button>
          </div>
        </form>
      </div>
    </div>;
};