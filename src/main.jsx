import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SupabaseProvider } from './contexts/SupabaseContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/tests">
      <SupabaseProvider>
        <App />
      </SupabaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);