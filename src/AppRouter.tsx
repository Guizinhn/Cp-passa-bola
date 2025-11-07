import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TournamentRegional } from "./pages/TournamentRegional";
import TournamentNational from "./pages/TournamentNational";
import { TournamentUpcoming } from "./pages/TournamentUpcoming";
import { ChatPage } from "./pages/ChatPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisteredTeams } from "./pages/RegisteredTeams";
import { DashboardPage } from "./pages/DashboardPage";
import { PrivateRoute } from "./components/PrivateRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tournaments/regional" element={<TournamentRegional />} />
        <Route path="/tournaments/national" element={<TournamentNational />} />
        <Route path="/tournaments/upcoming" element={<TournamentUpcoming />} />

        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/teams" element={<RegisteredTeams />} />
        
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
