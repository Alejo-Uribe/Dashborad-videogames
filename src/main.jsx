import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GameProvider } from './context/GameContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
// Este módulo es el punto de entrada de la aplicación, se utiliza la librería React para renderizar la aplicación y se le pasa la data desde el componente App.jsx
