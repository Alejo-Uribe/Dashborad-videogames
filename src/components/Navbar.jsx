import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2, Settings } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-black to-indigo-800 text-neon-green p-4 shadow-lg flex justify-between items-center border-b-2 border-neon-green">
      <h1 className="text-lg font-bold tracking-wider">🎮 GameDash</h1>
      <div className="flex gap-8 text-sm">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/"
            className={`flex items-center gap-2 hover:text-yellow-400 ${
              isActive('/') ? 'text-yellow-400 underline' : ''
            }`}
          >
            <Gamepad2 size={18} /> Dashboard
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/configuracion"
            className={`flex items-center gap-2 hover:text-yellow-400 ${
              isActive('/configuracion') ? 'text-yellow-400 underline' : ''
            }`}
          >
            <Settings size={18} /> Configuración
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

// Este módulo se encarga de mostrar la barra de navegación, se utiliza la librería framer-motion para animar los enlaces al pasar el mouse por encima
// y se utiliza la librería lucide-react para mostrar los iconos de los enlaces, se le pasa la data desde el componente GameDetail.jsx
