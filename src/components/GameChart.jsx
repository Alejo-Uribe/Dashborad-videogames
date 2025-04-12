import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GameChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
  <LineChart data={data} className="rounded-xl bg-black shadow-lg p-4">
    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
    <XAxis dataKey="name" stroke="#00ffcc" />
    <YAxis stroke="#00ffcc" />
    <Tooltip contentStyle={{ backgroundColor: "#1f1f1f", borderColor: "#FFD700" }} />
    <Legend />
    <Line
      type="monotone"
      dataKey="rating"
      stroke="#FFD700"
      strokeWidth={4}
      dot={{ stroke: '#FFD700', strokeWidth: 2, fill: '#1f1f1f' }}
    />
  </LineChart>
</ResponsiveContainer>

  );
};

export default GameChart;

//este modulo se encarga de mostrar el grafico de la puntuacion de los juegos, se le pasa la data desde el componente GameDetail.jsx
//se utiliza la libreria recharts para mostrar el grafico, se le pasa la data desde el componente GameDetail.jsx