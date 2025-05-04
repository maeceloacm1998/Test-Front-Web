import React from 'react';
import AppRoutes from './routes';
import './App.css';
import { CartScreen } from './components/CartScreen/cartScreen';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <CartScreen />
      <h2>Hello World</h2>
    </div>
  );
};

export default App;
