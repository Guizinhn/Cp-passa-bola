import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TournamentRegional } from './pages/TournamentRegional';
import { TournamentNational } from './pages/TournamentNational';
import { TournamentUpcoming } from './pages/TournamentUpcoming';
import { ChatPage } from './pages/ChatPage';
import { LoginPage } from './pages/LoginPage';
import { RegisteredTeams } from './pages/RegisteredTeams';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tournaments/regional" element={<TournamentRegional />} />
        <Route path="/tournaments/national" element={<TournamentNational />} />
        <Route path="/tournaments/upcoming" element={<TournamentUpcoming />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teams" element={<RegisteredTeams />} />
      </Routes>
    </BrowserRouter>;
}