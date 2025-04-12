import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#8A2BE2', '#00FFFF', '#FFD700', '#FF69B4', '#00FF7F'];


const GenrePieChart = ({ data }) => {
  // Agrupar los juegos por género y contar la cantidad de juegos por género
  const genreCount = {};
  data.forEach((game) => {
    if (game.genres && game.genres.length > 0) {
      const genreName = game.genres[0].name;
      genreCount[genreName] = (genreCount[genreName] || 0) + 1;
    }
  });

  const pieData = Object.entries(genreCount).map(([name, value]) => ({ name, value }));

  return (
    <ResponsiveContainer width="100%" height={400}>
  <PieChart>
    <Pie
      data={pieData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={150}
      fill="#FF69B4"
      stroke="#1f1f1f"
      strokeWidth={3}
    >
      {pieData.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip
      contentStyle={{ backgroundColor: '#111', borderColor: '#FFD700', color: '#fff' }}
    />
  </PieChart>
</ResponsiveContainer>

  );
};

export default GenrePieChart;

// Este módulo se encarga de mostrar el gráfico de géneros de los juegos, se le pasa la data desde el componente GameDetail.jsx
// Se utiliza la librería recharts para mostrar el gráfico, se le pasa la data desde el componente GameDetail.jsx
