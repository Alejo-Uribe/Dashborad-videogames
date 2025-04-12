
import { useState, useEffect } from 'react';
import { fetchGames } from '../services/api';  

export const useFetchGames = (page, pageSize, genre) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        // Si hay un género pasarlo a la URL de la API
        // Si no hay género, no pasarlo a la URL de la API
        const genreQuery = genre ? `&genres=${genre}` : '';
        const data = await fetchGames(page, pageSize, genreQuery);
        setGames(data.results);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los juegos');
        setLoading(false);
      }
    };
    getGames();
  }, [page, pageSize, genre]); 

  return { games, loading, error };
};

// Este módulo se encarga de manejar la lógica de la aplicación, se utiliza para cargar los juegos desde la API y se le pasa la data desde el componente App.jsx
