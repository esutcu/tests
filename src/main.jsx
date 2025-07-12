import React from 'react';
import { createRoot } from 'react-dom/client'; // Güncellenmiş import
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SupabaseProvider } from './contexts/SupabaseContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot kullan

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SupabaseProvider>
        <App />
      </SupabaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);