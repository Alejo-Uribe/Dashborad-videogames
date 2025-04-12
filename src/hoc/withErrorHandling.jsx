import React from 'react';

const withErrorHandling = (WrappedComponent) => {
  return ({ error, ...props }) => {
    if (error) {
      return <div>Error: {error}</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withErrorHandling;
 // Este módulo se encarga de manejar los errores de la aplicación, se utiliza para mostrar un mensaje de error en caso de que ocurra un error en la aplicación
// y se le pasa la data desde el componente GameDetail.jsx
