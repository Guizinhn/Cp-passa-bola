import React from 'react';
import { AppRouter } from './AppRouter';
import { TeamsProvider } from './contexts/TeamsContext';

export function App() {
  return (
    <TeamsProvider>
      <AppRouter />
    </TeamsProvider>
  );
}