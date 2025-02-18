import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { Product, CartProduct } from "../types/types";

interface CartContextProps {
  productsCart: CartProduct[];
  addProductToCart: (product: Product) => void;
  updateProductQuantity: (productId: number, amount: number) => void;
}

const storedCartProducts = localStorage.getItem('cart-products');
const initialState: CartProduct[] = storedCartProducts ? JSON.parse(storedCartProducts) : [];

const CartContext = createContext<CartContextProps>({
  productsCart: [],
  addProductToCart: () => {},
  updateProductQuantity: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode}> = ({ children }) => {

  const [productsCart, setProductsCart] = useState<CartProduct[]>(initialState);

  useEffect(() => {
    localStorage.setItem('cart-products', JSON.stringify(productsCart));
  }, [productsCart])

  const addProductToCart = (product: Product) => {
    const isProductInCart = productsCart.some((item) => item.id === product.id);

    // Check if the product is added to the Cart
    if (!isProductInCart) {
      setProductsCart((prevProducts) => [...prevProducts, { ...product, quantity: 1}]);
    }
  };

  const updateProductQuantity = (productId: number, amount: number) => {
    setProductsCart((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity + amount) }
          : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ productsCart, addProductToCart, updateProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);