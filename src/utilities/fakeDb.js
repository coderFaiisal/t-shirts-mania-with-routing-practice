const getStoredCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const setToDb = (id) => {
  let shoppingCart = getStoredCart();

  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeItemFromDb = (id) => {
  const shoppingCart = getStoredCart();
  if (shoppingCart[id]) {
    delete shoppingCart[id];
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const clearDb = () => {
  localStorage.clear();
};

export { getStoredCart, setToDb, removeItemFromDb, clearDb };
