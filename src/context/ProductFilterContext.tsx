import { createContext, ReactNode, useContext, useState } from 'react';

interface ProductContextProps {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
}

const ProductContext = createContext<ProductContextProps>({
  categoryFilter: 'all',
  setCategoryFilter: () => {},
});

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  return (
    <ProductContext.Provider value={{ categoryFilter, setCategoryFilter }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductFilter = () => useContext(ProductContext);