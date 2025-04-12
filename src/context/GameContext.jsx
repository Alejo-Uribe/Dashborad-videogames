
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFetchGames } from '../hooks/useFetchGames';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [limit, setLimit] = useState(10);
  const [genreFilter, setGenreFilter] = useState('');  
  
  const { games, loading, error } = useFetchGames(1, limit, genreFilter);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-black', 'text-green-400');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-black', 'text-green-400');
    }
  }, [darkMode]); 

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <GameContext.Provider
      value={{
        games,
        loading,
        error,
        darkMode,
        toggleDarkMode,
        limit,
        setLimit,
        genreFilter,
        setGenreFilter,  
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);

// Este módulo se encarga de manejar el contexto de la aplicación, se utiliza para almacenar la configuración de la aplicación y se le pasa la data desde el componente App.jsx
// Se utiliza la librería React para manejar el contexto y se le pasa la data desde el componente App.jsx
