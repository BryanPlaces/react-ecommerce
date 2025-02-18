import { createContext, useState, ReactNode } from "react";

interface CartContextProps {
  children: ReactNode;
}

const CartContext = createContext({});

const CartProvider: React.FC<CartContextProps> = ({ children }) => {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext }