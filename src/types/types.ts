export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartContextProps {
  productsCart: CartProduct[];
  addProductToCart: (product: Product) => void;
  updateProductQuantity: (productId: number, amount: number) => void;
  deleteProduct: (productId: number) => void;
  cleanCart: () => void;
  userInfo: userInfo;
  setUserInfo: (info: userInfo) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  cardInfo: cardInfo;
  setCardInfo: (info: cardInfo) => void;
  isFormValid: () => boolean;
}

interface userInfo {
  name: string;
  lastname: string;
  address: string;
  postalCode: string;
}

interface cardInfo {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardholderName: string;
}