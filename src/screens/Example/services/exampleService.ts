import api from '../../../services/api';
import { Product } from '../types';

/**
 * Serviço de exemplo que demonstra uma chamada simples à API
 */
export const exampleService = {
  /**
   * Busca a lista de produtos
   */
  getProducts: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>('/products');
    return response.data;
  }
}; 