import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartScreen from '../screens/CartScreen';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={< CartScreen />} />
      {/* Adicione novas rotas aqui */}
      {/* Exemplo: <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default AppRoutes; 