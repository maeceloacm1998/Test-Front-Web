import React from 'react';
import './styles.css';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
      <button 
        onClick={() => window.location.reload()}
        className="retry-button"
      >
        Tentar Novamente
      </button>
    </div>
  );
}; 