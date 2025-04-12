import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/configuracion" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// Este módulo es el punto de entrada de la aplicación, se utiliza la librería react-router-dom para manejar las rutas de la aplicación
// y se le pasa la data desde el componente GameDetail.jsx
