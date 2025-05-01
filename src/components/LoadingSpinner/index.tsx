import React from 'react';
import './styles.css';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p>Carregando...</p>
    </div>
  );
}; 