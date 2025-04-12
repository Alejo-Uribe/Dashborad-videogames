
export const fetchGames = async (page, pageSize, genre) => {
  const API_KEY = 'f524801e6bf24df3b345d6cc7b9df218'; 
  const url = `https://api.rawg.io/api/games?page=${page}&page_size=${pageSize}${genre}&key=${API_KEY}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error al obtener los datos');
  }
  const data = await response.json();
  return data;
};
// Este módulo se encarga de hacer la petición a la API, se utiliza para cargar los juegos desde la API y se le pasa la data desde el componente App.jsx
// Se utiliza la librería fetch para hacer la petición a la API y se le pasa la data desde el componente App.jsx
