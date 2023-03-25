import { fetchCart, fetchTableNo, fetchUser } from "../utils/fetchLocalStorage";

const cartInfo = fetchCart();
const userInfo = fetchUser();
const tableno = fetchTableNo();

export const initialState = {
  cartShow: false,
  cartItems: cartInfo,
  tableNo: tableno,
  checkoutShow: false,
  user: userInfo,
  online: [],
  discount: false,
};
