import React from 'react';
import AppRoutes from './routes';
import './App.css';
import { CartScreen } from './components/CartScreen/cartscreen';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <CartScreen />
    </div>
  );
};

export default App;
