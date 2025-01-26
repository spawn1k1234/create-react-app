import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Імпортуємо стилі
import App from './App';  // Імпортуємо головний компонент додатка

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
