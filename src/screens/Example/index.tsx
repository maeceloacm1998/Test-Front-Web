import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { exampleService } from './services/exampleService';
import { ProductList } from './components/ProductList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import type { Product } from './types';
import './styles.css';

/**
 * Componente de exemplo que demonstra:
 * - Como fazer uma requisição GET usando React Query
 * - Como tratar estados de loading e erro
 * - Como exibir os dados na interface
 */
const Example: React.FC = () => {
  // Query para buscar dados
  const { 
    data: products,
    isLoading,
    error
  } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: exampleService.getProducts
  });

  // Tratamento de loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Tratamento de erro
  if (error) {
    return <ErrorMessage message="Não foi possível carregar os produtos" />;
  }

  return (
    <div className="example-container">
      <h1>Página de Exemplo</h1>
      
      {/* Lista de produtos */}
      <ProductList 
        products={products || []}
        onProductUpdate={() => {}} // Função vazia pois não vamos usar
      />

      {/* Mensagem quando não há produtos */}
      {products?.length === 0 && (
        <p className="no-products">Nenhum produto encontrado</p>
      )}
    </div>
  );
};

export default Example; 