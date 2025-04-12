
import React from 'react';
import { useGameContext } from '../context/GameContext';
import GameChart from '../components/GameChart';
import GenrePieChart from '../components/GenrePieChart';

const Dashboard = () => {
  const { games, loading, error } = useGameContext();  // Obtener los juegos, loading y error del contexto

  if (loading) return <p className="text-center mt-10">Cargando juegos...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Dashboard de Videojuegos 🎮</h1>

      
      <section className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">Rating de Juegos</h2>
        <GameChart data={games} />
      </section>

      
      <section className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">Distribución por Género</h2>
        <GenrePieChart data={games} />
      </section>
    </div>
  );
};

export default Dashboard;
// Este módulo se encarga de mostrar el dashboard de los videojuegos, se utiliza la librería recharts para mostrar el gráfico de puntuación y la distribución por género
// y se le pasa la data desde el componente GameDetail.jsx
