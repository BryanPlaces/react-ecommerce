import { fetchProducts, fetchProductById } from '../services/products';
import { useState, useEffect, useCallback } from 'react';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export function useProduct() {

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = useCallback(async () => {
    const products = await fetchProducts();
    setProducts(products);
  }, []);

  const getProductById = useCallback(async (productId: number) => {
    const product = await fetchProductById(productId);
    setProduct(product);
  }, []);

  return { products, product, getProductById }
}