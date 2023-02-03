import { fetchCart } from "../utils/fetchLocalStorage";

const cartInfo = fetchCart();

export const initialState = {
  cartShow: false,
  cartItems: cartInfo
};
