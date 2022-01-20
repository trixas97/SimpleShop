
import { useContextSelector } from 'use-context-selector';
import { Context } from './context';

const useProducts = () => {
    const context = useContextSelector(Context, (state) => state.products);

    if (context === undefined) {
      throw new Error('useProducts must be used within ContextProvider');
    }
  
    return context;
};

const useProduct = (id) => {
    const context = useContextSelector(Context, (state) => state.products.find(product => product.id === parseInt(id)));

    if (context === undefined) {
      throw new Error('useProduct must be used within ContextProvider');
    }
  
    return context;
};

export { useProducts, useProduct }