import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { exampleService } from './services/exampleService';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import type { Product } from './types';

/**
 * Componente de exemplo que demonstra:
 * - Como fazer uma requisição GET usando React Query
 * - Como tratar estados de loading e erro
 * - Como exibir os dados na interface
 * - Mobile-first com Tailwind
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
    <div className="min-h-screen bg-gray-50">
      {/* Header - Mobile: padding menor, Desktop: padding maior */}
      <header className="bg-white shadow-sm">
        <div className="container-padding max-w-7xl mx-auto py-4 md:py-6">
          <h1 className="text-xl md:text-2xl font-bold text-text-primary">
            Página de Exemplo
          </h1>
        </div>
      </header>

      {/* Main Content - Grid responsivo */}
      <main className="container-padding max-w-7xl mx-auto py-6 md:py-8">
        {/* Lista de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products?.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                {product.name}
              </h2>
              <p className="text-text-secondary mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-secondary font-bold">
                  R$ {product.price.toFixed(2)}
                </span>
                <button 
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                  onClick={() => {}}
                >
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Estado vazio - Responsivo e centralizado */}
        {products?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 md:py-16">
            <p className="text-text-secondary text-center text-lg md:text-xl">
              Nenhum produto encontrado
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Example; 