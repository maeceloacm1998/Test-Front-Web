import React from 'react';
import { Product } from '../../types';
import './styles.css';

interface ProductListProps {
  products: Product[];
  onProductUpdate: (productId: number) => void;
}

/**
 * Componente de exemplo que demonstra:
 * - Componentização
 * - Props tipadas
 * - Estilos modulares
 * - Documentação
 */
export const ProductList: React.FC<ProductListProps> = ({ products, onProductUpdate }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">R$ {product.price.toFixed(2)}</p>
          <button 
            onClick={() => onProductUpdate(product.id)}
            className="update-button"
          >
            Atualizar Produto
          </button>
        </div>
      ))}
    </div>
  );
}; 