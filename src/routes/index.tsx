import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Example from '../screens/Example';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      {/* Adicione novas rotas aqui */}
      {/* Exemplo: <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default AppRoutes; 