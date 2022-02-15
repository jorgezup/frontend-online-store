const storageProductsReview = JSON.parse(localStorage.getItem('reviews'));
if (!storageProductsReview) {
  localStorage.setItem('reviews', JSON.stringify([]));
}

const readLocalStorage = () => JSON.parse(localStorage.getItem('reviews'));

const saveReviews = (productReviews) => localStorage
  .setItem('reviews', JSON.stringify(productReviews));

export const getReviewsFromLocalStorage = () => readLocalStorage();

export const addReviews = (newReview) => {
  const reviewsSaved = readLocalStorage();
  saveReviews([...reviewsSaved, newReview]);
};

export const filterSpecificReview = (id) => {
  const allReviews = readLocalStorage();
  const filterAddReviews = allReviews.filter((itemReview) => itemReview.productId === id);
  return filterAddReviews;
};
