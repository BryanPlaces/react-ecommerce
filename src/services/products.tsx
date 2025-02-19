
const BASE_URL = 'https://fakestoreapi.com';

const fetchData = async (url: string) => {
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return [];
  }
};

export const fetchProducts = async () => {
  
  const url = `${BASE_URL}/products`;
  
  const data = await fetchData(url);
  return data;
}

export const fetchProductById = async (productId: number) => {

  const url = `${BASE_URL}/products/${productId}`;
  
  const data = await fetchData(url);
  return data;
}

export const fetchCategories = async() => {
  
  const url = `${BASE_URL}/products/categories`;
  
  const data = await fetchData(url);
  return data;
}

export const fetchProductsByCategory = async(category: string) => {
  
  const url = `${BASE_URL}/products/category/${category}`;
  
  const data = await fetchData(url);
  return data;
}