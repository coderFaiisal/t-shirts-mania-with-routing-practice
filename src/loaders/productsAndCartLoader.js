import { getStoredCart } from "../utilities/fakeDb";

export const productsAndCartLoader = async () => {
  //get data
  const productsData = await fetch("tshirts.json");
  const products = await productsData.json();

  //get cart
  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((pd) => pd._id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      initialCart.push(addedProduct);
    }
  }

  return { products, initialCart };
};
