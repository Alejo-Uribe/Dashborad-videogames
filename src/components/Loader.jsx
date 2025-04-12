
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-4xl text-yellow-400"
      >
        ⌛ Cargando niveles...
      </motion.div>
      <motion.div
        className="w-40 h-2 bg-gray-700 rounded-full overflow-hidden"
        animate={{ scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <motion.div
          className="h-full bg-yellow-400"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;

// Este módulo se encarga de mostrar un loader mientras se cargan los niveles de los juegos, se utiliza la librería framer-motion para animar el loader
// y se le pasa la data desde el componente GameDetail.jsx