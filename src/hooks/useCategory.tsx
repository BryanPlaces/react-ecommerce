import { fetchCategories } from '../services/products';
import { useState, useEffect, useCallback } from 'react';

export function useCategory() {

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = useCallback(async () => {
    const categories = await fetchCategories();
    setCategories(categories);
  }, []);

  return { categories }
}