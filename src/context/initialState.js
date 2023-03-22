import { fetchCart, fetchUser } from "../utils/fetchLocalStorage";

const cartInfo = fetchCart();
const userInfo = fetchUser();

export const initialState = {
  cartShow: false,
  cartItems: cartInfo,
  tableNo: 0,
  checkoutShow: false,
  user: userInfo,
  online: [],
  discount: false
};
