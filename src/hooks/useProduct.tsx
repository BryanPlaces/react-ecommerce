import { fetchProducts, fetchProductById, fetchProductsByCategory } from '../services/products';
import { useState, useCallback } from 'react';
import { Product } from '../types/types';

export function useProduct() {

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  const getProducts = useCallback(async () => {
    const products = await fetchProducts();
    setProducts(products);
  }, []);

  const getProductById = useCallback(async (productId: number) => {
    const product = await fetchProductById(productId);
    setProduct(product);
  }, []);

  const getProductsByCategory = useCallback(async (category: string) => {
    const products = await fetchProductsByCategory(category);
    setProducts(products);
  }, []);

  return { products, product, getProducts, getProductById, getProductsByCategory }
}