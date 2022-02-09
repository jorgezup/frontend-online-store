export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await result.json();
  console.log(data);
  return data;
}

export async function getProductsFromCategoryAndQuery(category) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${category}`);
  const data = await result.json();
  console.log(data);
  return data;
}
