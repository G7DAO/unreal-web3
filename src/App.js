import React from 'react';
import LandingPage from './pages/Landing';
import MainLayout from './components/MainLayout';

import './App.css';

function App() {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
}

export default App;
