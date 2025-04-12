const initialState = {
    darkMode: false,
    gameLimit: 10,
    genreFilter: '',
  };
  
  export const configReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_DARK_MODE':
        return { ...state, darkMode: !state.darkMode };
      case 'SET_GAME_LIMIT':
        return { ...state, gameLimit: action.payload };
      case 'SET_GENRE_FILTER':
        return { ...state, genreFilter: action.payload };
      default:
        return state;
    }
  };
  
  // Este módulo se encarga de manejar el estado de la configuración de la aplicación, como el modo oscuro, el límite de juegos y el filtro de géneros.
  // Se utiliza para almacenar la configuración de la aplicación y se le pasa la data desde el componente App.jsx