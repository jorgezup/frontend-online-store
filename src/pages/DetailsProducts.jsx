import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../icons/cart.svg';
import { getSpecificItem } from '../services/api';

class DetailsProducts extends React.Component {
    state = {
      product: [],
    }

    async componentDidMount() {
      const { match: { params: { id } } } = this.props;
      const product = await getSpecificItem(id);
      this.setState({ product });
    }

    render() {
      const {
        handleButtonAddCart,
        handleSubmitReview,
        handleChange,
        email,
        rate,
        review,
        productReview } = this.props;
      console.log(productReview);
      const { product } = this.state;
      const { id, title, price, thumbnail, attributes } = product;
      console.log(this.props);
      const rating = ['1', '2', '3', '4', '5'];
      return (
        <>
          <section data-testid="product-detail-name">
            <div>
              <Link
                data-testid="shopping-cart-button"
                to="/cart"
              >
                <img src={ cart } alt="Cart Icon" />
              </Link>
            </div>
            <div>
              <h2>{ title }</h2>
              <h3>{ price }</h3>
              <img src={ thumbnail } alt={ title } />
            </div>
            <button
              id={ id }
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => handleButtonAddCart(product) }
            >
              Adicionar ao Carrinho
            </button>
            <div>
              <h2>Especificações</h2>
              { attributes && attributes.map(({ name, value_name: valueName }) => (
                <li key={ name }>
                  { name }
                  :
                  { valueName }
                </li>)) }
            </div>
          </section>

          <section>
            <h4>Avaliação do Produto</h4>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                data-testid="product-detail-email"
                value={ email }
                onChange={ handleChange }
              />
              <select
                name="rate"
                id="rating"
                value={ rate }
                onChange={ handleChange }
              >
                {
                  rating.map((rateValue, index) => (
                    <option
                      key={ index }
                      value={ rateValue }
                      data-testid={ `${rateValue}-rating` }
                    >
                      {`Nota ${rateValue}`}
                    </option>
                  ))
                }
              </select>
              <textarea
                cols="30"
                rows="10"
                data-testid="product-detail.evaluation"
                name="review"
                value={ review }
                onChange={ handleChange }
              />
              <button
                type="button"
                data-testid="submiit-review-btn"
                onClick={ () => handleSubmitReview(product) }
              >
                Enviar avaliação
              </button>
            </form>
          </section>

          {productReview.lenght
           && productReview.map((review) => (
             <>
               <h4>Avaliações do Produto</h4>
               <div>
                 <p>{review.email}</p>
               </div>
             </>
           ))}
        </>
      );
    }
}

DetailsProducts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  handleButtonAddCart: PropTypes.func.isRequired,
};

export default DetailsProducts;
