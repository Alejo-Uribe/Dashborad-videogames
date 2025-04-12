// /src/pages/Settings.jsx
import React from 'react';
import { useGameContext } from '../context/GameContext';

const Settings = () => {
  const {
    limit,
    setLimit,
    genreFilter,
    setGenreFilter,
  } = useGameContext();

  return (
    <div className="p-6 max-w-xl mx-auto card">
      <h1 className="text-2xl mb-6 text-center font-bold text-yellow-400">🎮 Configuración del Panel 🎮</h1>

      {/* Límite de juegos */}
      <div className="mb-6">
        <label className="block mb-3 text-lg font-semibold text-cyan-300">
          Cantidad de Juegos:
        </label>
        <select
          className="w-full p-3 bg-black border border-cyan-500 rounded-xl text-cyan-300 font-mono text-lg shadow-md hover:border-yellow-400 transition-all duration-300"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          {[5, 10, 15, 20].map((val) => (
            <option key={val} value={val}>{val}</option>
          ))}
        </select>
      </div>

      {/* Filtro por Género */}
      <div>
        <label className="block mb-3 text-lg font-semibold text-cyan-300">
          Filtrar por Género:
        </label>
        <select
          className="w-full p-3 bg-black border border-purple-500 rounded-xl text-purple-300 font-mono text-lg shadow-md hover:border-yellow-400 transition-all duration-300"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="action">Acción</option>
          <option value="adventure">Aventura</option>
          <option value="rpg">RPG</option>
          <option value="shooter">Shooter</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
