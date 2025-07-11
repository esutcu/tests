import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { SupabaseProvider } from './contexts/SupabaseContext';
import './index.css'; // Brand styles

ReactDOM.render(
  <React.StrictMode>
    <SupabaseProvider>
      <LocalizationProvider>
        <App />
      </LocalizationProvider>
    </SupabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);