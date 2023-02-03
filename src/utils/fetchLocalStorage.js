export const fetchCart = () => {
    const cartInfo =
      localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.removeItem("cartItems");
  
    return cartInfo ? cartInfo : [];
  };