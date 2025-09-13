import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../components/Header';
import { LoginModal } from '../components/LoginModal';
import { SendIcon, SearchIcon } from 'lucide-react';
export const ChatPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState(0);
  const messagesEndRef = useRef(null);
  const [conversations, setConversations] = useState([{
    id: 0,
    name: 'Time São Paulo FC',
    avatar: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    lastMessage: 'Vejo vocês no treino amanhã!',
    unread: 2,
    messages: [{
      id: 1,
      sender: 'Treinadora Maria',
      text: 'Bom dia equipe! Só para lembrar que temos treino amanhã às 9h.',
      time: '10:30',
      isMine: false
    }, {
      id: 2,
      sender: 'Ana',
      text: 'Estarei lá!',
      time: '10:32',
      isMine: false
    }, {
      id: 3,
      sender: 'Você',
      text: 'Obrigada pelo lembrete. Devemos levar os novos uniformes?',
      time: '10:35',
      isMine: true
    }, {
      id: 4,
      sender: 'Treinadora Maria',
      text: 'Sim, por favor tragam seus novos uniformes para a foto do time.',
      time: '10:40',
      isMine: false
    }, {
      id: 5,
      sender: 'Beatriz',
      text: 'Vejo vocês no treino amanhã!',
      time: '10:45',
      isMine: false
    }]
  }, {
    id: 1,
    name: 'Organizadores do Torneio',
    avatar: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    lastMessage: 'Prazo de inscrição estendido até sexta-feira',
    unread: 0,
    messages: [{
      id: 1,
      sender: 'Admin',
      text: 'Olá a todos! Estamos animados em anunciar que a Copa Regional de São Paulo começará no próximo mês.',
      time: 'Ontem',
      isMine: false
    }, {
      id: 2,
      sender: 'Admin',
      text: 'As inscrições estão abertas para todos os times qualificados.',
      time: 'Ontem',
      isMine: false
    }, {
      id: 3,
      sender: 'Você',
      text: 'Nosso time gostaria de se inscrever. Qual é o prazo?',
      time: 'Ontem',
      isMine: true
    }, {
      id: 4,
      sender: 'Admin',
      text: 'O prazo original era quarta-feira, mas nós estendemos até sexta-feira para acomodar mais times.',
      time: 'Hoje',
      isMine: false
    }, {
      id: 5,
      sender: 'Admin',
      text: 'Prazo de inscrição estendido até sexta-feira',
      time: 'Agora mesmo',
      isMine: false
    }]
  }, {
    id: 2,
    name: 'Equipe Técnica',
    avatar: 'https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    lastMessage: 'Novo programa de treinamento anexado',
    unread: 1,
    messages: [{
      id: 1,
      sender: 'Treinador Principal',
      text: 'Estive revisando nossa última partida e notei algumas áreas em que precisamos trabalhar.',
      time: 'Segunda',
      isMine: false
    }, {
      id: 2,
      sender: 'Treinador Assistente',
      text: 'Concordo. A defesa precisa de mais coordenação.',
      time: 'Segunda',
      isMine: false
    }, {
      id: 3,
      sender: 'Você',
      text: 'Devemos focar nisso no treino de amanhã?',
      time: 'Segunda',
      isMine: true
    }, {
      id: 4,
      sender: 'Treinador Principal',
      text: 'Sim, preparei um programa de treinamento especializado para esta semana.',
      time: 'Segunda',
      isMine: false
    }, {
      id: 5,
      sender: 'Treinador Principal',
      text: 'Novo programa de treinamento anexado',
      time: 'Hoje',
      isMine: false
    }]
  }, {
    id: 3,
    name: 'Liga Regional',
    avatar: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    lastMessage: 'Atualização da programação para o próximo mês',
    unread: 0,
    messages: [{
      id: 1,
      sender: 'Admin da Liga',
      text: 'Atenção a todos os times: Finalizamos a programação das partidas do próximo mês.',
      time: 'Semana passada',
      isMine: false
    }, {
      id: 2,
      sender: 'Você',
      text: 'Podem confirmar os horários das nossas partidas?',
      time: 'Semana passada',
      isMine: true
    }, {
      id: 3,
      sender: 'Admin da Liga',
      text: 'Seu time jogará no dia 15 às 15h e no dia 22 às 17h.',
      time: 'Semana passada',
      isMine: false
    }, {
      id: 4,
      sender: 'Você',
      text: 'Obrigada pela informação.',
      time: 'Semana passada',
      isMine: true
    }, {
      id: 5,
      sender: 'Admin da Liga',
      text: 'Atualização da programação para o próximo mês',
      time: 'Ontem',
      isMine: false
    }]
  }]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [conversations[activeChat].messages]);
  const handleSendMessage = e => {
    e.preventDefault();
    if (message.trim()) {
      // Add the new message to the conversation
      const newMessage = {
        id: conversations[activeChat].messages.length + 1,
        sender: 'Você',
        text: message,
        time: 'Agora',
        isMine: true
      };
      const updatedConversations = conversations.map(conversation => {
        if (conversation.id === activeChat) {
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
            lastMessage: message
          };
        }
        return conversation;
      });
      setConversations(updatedConversations);
      setMessage('');
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={() => setShowLoginModal(true)} />
      <div className="pt-20 h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar - Conversation List */}
          <div className="w-full sm:w-80 bg-gray-800 bg-opacity-90 border-r border-gray-700 flex flex-col">
            <div className="p-4 border-b border-gray-700">
              <div className="relative">
                <input type="text" placeholder="Buscar conversas..." className="w-full bg-gray-700 text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map(conversation => <div key={conversation.id} className={`flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors ${activeChat === conversation.id ? 'bg-gray-700' : ''}`} onClick={() => setActiveChat(conversation.id)}>
                  <div className="relative">
                    <img src={conversation.avatar} alt={conversation.name} className="w-12 h-12 rounded-full object-cover" />
                    {conversation.unread > 0 && <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {conversation.unread}
                      </span>}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-white font-medium">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-gray-400">12:30</span>
                    </div>
                    <p className={`text-sm truncate ${conversation.unread > 0 ? 'text-white font-medium' : 'text-gray-400'}`}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Main Chat Area */}
          <div className="hidden sm:flex flex-col flex-1 bg-gray-900 bg-opacity-90">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-700 flex items-center">
              <img src={conversations[activeChat].avatar} alt={conversations[activeChat].name} className="w-10 h-10 rounded-full object-cover" />
              <div className="ml-4">
                <h2 className="text-white font-medium">
                  {conversations[activeChat].name}
                </h2>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversations[activeChat].messages.map(msg => <div key={msg.id} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md rounded-lg px-4 py-2 ${msg.isMine ? 'bg-purple-600 text-white rounded-br-none' : 'bg-gray-700 text-white rounded-bl-none'}`}>
                    {!msg.isMine && <p className="text-xs text-purple-300 font-medium mb-1">
                        {msg.sender}
                      </p>}
                    <p>{msg.text}</p>
                    <p className="text-xs text-right mt-1 opacity-70">
                      {msg.time}
                    </p>
                  </div>
                </div>)}
              <div ref={messagesEndRef} />
            </div>
            {/* Message Input */}
            <div className="p-4 border-t border-gray-700">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Digite uma mensagem..." className="flex-1 bg-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-md px-4 py-2 transition-colors">
                  <SendIcon size={18} />
                </button>
              </form>
            </div>
          </div>
          {/* Mobile: Select a conversation prompt */}
          <div className="sm:hidden flex-1 flex items-center justify-center bg-gray-900 bg-opacity-90">
            <div className="text-center">
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircleIcon size={32} className="text-purple-400" />
              </div>
              <h3 className="text-white font-medium mb-2">Suas Mensagens</h3>
              <p className="text-gray-400 text-sm">
                Selecione uma conversa para começar a conversar
              </p>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>;
};
const MessageCircleIcon = ({
  size = 24,
  className = ''
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>;