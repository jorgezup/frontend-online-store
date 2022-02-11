export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await result.json();
  return data;
}
export async function getProductsFromCategoryAndQuery(category) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${category}`);
  const data = await result.json();
  return data;
}
export async function getSpecificCategory(categoryId) {
  const result = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const data = await result.json();
  return data;
}

export async function getSpecificItem(productId) {
  const result = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await result.json();
  return data;
}
