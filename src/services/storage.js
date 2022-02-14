import { getSpecificItem } from './api';

const FRONTEND_ONLINE_CART = 'frontendOnlineStore:cart';

const storageCart = JSON.parse(localStorage.getItem(FRONTEND_ONLINE_CART));

if (!storageCart) {
  localStorage.setItem(FRONTEND_ONLINE_CART, JSON.stringify([]));
}

const readCart = () => JSON.parse(localStorage.getItem(FRONTEND_ONLINE_CART));

const saveProductCart = (productsCart) => localStorage
  .setItem(FRONTEND_ONLINE_CART, JSON.stringify(productsCart));

export const getProductsFromLocalStorage = () => readCart();

export const addProduct = async (productId) => {
  const updatedCart = readCart();
  const productExists = updatedCart.find((product) => product.id === productId);
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;
  if (productExists) {
    productExists.amount = amount;
  } else {
    const product = await getSpecificItem(productId);
    const newProduct = {
      ...product,
      amount: 1,
    };
    updatedCart.push(newProduct);
  }
  saveProductCart([...updatedCart]);
};

export const removeProduct = async (productId) => {
  const updatedCart = readCart();
  const productExists = updatedCart.find((product) => product.id === productId);
  const currentAmount = productExists.amount === 1 ? 0 : productExists.amount;
  // ainda possui quantidade deste produto
  if (currentAmount === 0) {
    saveProductCart(updatedCart.filter((product) => product.id !== productId));
  } else {
    const amount = currentAmount - 1;
    productExists.amount = amount;
    saveProductCart([...updatedCart]);
  }
};
