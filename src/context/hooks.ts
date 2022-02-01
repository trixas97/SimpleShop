
import { useContextSelector } from 'use-context-selector';
import { IProduct } from '../types/types';
import { Context } from './context';

const useProducts = (): IProduct[] => {
    const context = useContextSelector(Context, (state) => state.products);

    if (context === undefined) {
      throw new Error('useProducts must be used within ContextProvider');
    }
  
    return context;
};

const useProduct = (id: number) : IProduct => {
    const context = useContextSelector(Context, (state) => state.products.find((product) => product.id === id));

    if (context === undefined) {
      throw new Error('useProduct must be used within ContextProvider');
    }
  
    return context;
};

export { useProducts, useProduct }