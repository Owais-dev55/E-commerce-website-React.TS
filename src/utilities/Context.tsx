import { createContext  } from 'react';
import { Products } from './Types';

const cart = createContext<{
  count: number;
  cartItems: Products[] ;
  setCount: (count: number) => void;
  setCartItems: (items: Products[]) => void;

}>({
  count: 0,
  cartItems: [],
  setCount: () => {},
  setCartItems: () => {},
});
  export { cart };