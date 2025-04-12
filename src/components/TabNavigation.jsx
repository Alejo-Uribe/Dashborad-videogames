import React, { useState } from 'react';

const TabNavigation = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        {React.Children.map(children, (child, index) => (
          <button onClick={() => setActiveTab(index)}>
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

const Tab = ({ children }) => <div>{children}</div>;

TabNavigation.Tab = Tab;

export default TabNavigation;

// Este módulo se encarga de mostrar la navegación por pestañas, se utiliza para mostrar los diferentes gráficos de los juegos, se le pasa la data desde el componente GameDetail.jsx
// Se utiliza la librería React para mostrar los diferentes gráficos de los juegos, se le pasa la data desde el componente GameDetail.jsx