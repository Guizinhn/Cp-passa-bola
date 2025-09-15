import React from 'react';
import { AppRouter } from './AppRouter';
import { TeamsProvider } from './contexts/TeamsContext';
import { AuthProvider } from './contexts/AuthContext';

export function App() {
  return (
    <AuthProvider>
      <TeamsProvider>
        <AppRouter />
      </TeamsProvider>
    </AuthProvider>
  );
}
