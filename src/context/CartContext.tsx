import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { Product, CartProduct, CartContextProps } from "../types/types";

const storedCartProducts = localStorage.getItem('cart-products');
const initialState: CartProduct[] = storedCartProducts ? JSON.parse(storedCartProducts) : [];

const CartContext = createContext<CartContextProps>({
  productsCart: [],
  addProductToCart: () => {},
  updateProductQuantity: () => {},
  deleteProduct: () => {},
  cleanCart: () => {},
  userInfo: {
    name: "",
    lastname: "",
    address: "",
    postalCode: "",
  },
  setUserInfo: () => {},
  paymentMethod: "",
  setPaymentMethod: () => {},
  cardInfo: {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardholderName: "",
  },
  setCardInfo: () => {},
  isFormValid: () => false
});

export const CartProvider: React.FC<{ children: ReactNode}> = ({ children }) => {

  const [productsCart, setProductsCart] = useState<CartProduct[]>(initialState);
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    address: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardholderName: "",
  });


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

  const deleteProduct = (productId: number) => {
    const newProductsCart = productsCart.filter(product => product.id !== productId);
    setProductsCart(newProductsCart);
  }

  const cleanCart = () => {
    setProductsCart([]);
  }

  const isFormValid = () => {
    return (
      userInfo.name.trim() !== "" &&
      userInfo.lastname.trim() !== "" &&
      userInfo.address.trim() !== "" &&
      userInfo.postalCode.trim() !== ""
    );
  };

  return (
    <CartContext.Provider value={{ 
      productsCart,
      addProductToCart,
      updateProductQuantity,
      deleteProduct,
      cleanCart,
      userInfo,
      setUserInfo,
      paymentMethod,
      setPaymentMethod,
      cardInfo,
      setCardInfo,
      isFormValid,
    }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);