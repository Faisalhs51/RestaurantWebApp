export const actionType = {
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_TABLENO: "SET_TABLENO",
  SET_CHECKOUTSHOW: "SET_CHECKOUTSHOW",
  SET_USER: "SET_USER"
};

const reducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    case actionType.SET_TABLENO:
      return {
        ...state,
        tableNo: action.tableNo,
      };

    case actionType.SET_CHECKOUTSHOW:
      return {
        ...state,
        checkoutShow: action.checkoutShow,
      };

    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
